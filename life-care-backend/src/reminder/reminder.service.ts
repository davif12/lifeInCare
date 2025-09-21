import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, LessThan, MoreThan } from 'typeorm';
import { Reminder, ReminderStatus, ReminderFrequency } from './reminder.entity';
import { User, UserRole } from '../users/entities/user.entity';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { UpdateReminderDto } from './dto/update-reminder.dto';
import { CaregiverElderlyService } from '../users/caregiver-elderly.service';

@Injectable()
export class ReminderService {
  constructor(
    @InjectRepository(Reminder)
    private reminderRepository: Repository<Reminder>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private caregiverElderlyService: CaregiverElderlyService,
  ) {}

  async create(createReminderDto: CreateReminderDto, caregiverId: string) {
    // Criar relacionamento cuidador-idoso automaticamente (se não existir)
    await this.caregiverElderlyService.createRelationshipIfNotExists(caregiverId, createReminderDto.elderlyUserId);

    const reminderDateTime = new Date(createReminderDto.reminderDateTime);
    const nextExecution = this.calculateNextExecution(reminderDateTime, createReminderDto.frequency, createReminderDto.customIntervalMinutes);

    const reminder = this.reminderRepository.create({
      ...createReminderDto,
      caregiverUserId: caregiverId,
      reminderDateTime,
      endDate: createReminderDto.endDate ? new Date(createReminderDto.endDate) : undefined,
      nextExecution: nextExecution || undefined,
    });

    const savedReminder = await this.reminderRepository.save(reminder);
    
    return {
      message: 'Lembrete criado com sucesso',
      reminder: savedReminder,
    };
  }

  async findAllByPatient(elderlyUserId: string, caregiverUserId: string) {
    const reminders = await this.reminderRepository.find({
      where: { elderlyUserId, caregiverUserId },
      order: { reminderDateTime: 'ASC' },
    });

    return reminders;
  }

  async findAllByCaregiver(caregiverUserId: string) {
    const reminders = await this.reminderRepository.find({
      where: { caregiverUserId },
      relations: ['elderlyUser', 'caregiverUser'],
      order: { reminderDateTime: 'ASC' },
    });

    return reminders;
  }

  async findUpcoming(caregiverUserId: string, hours: number = 24) {
    const now = new Date();

    const reminders = await this.reminderRepository.find({
      where: {
        caregiverUserId,
        reminderDateTime: MoreThan(now),
        status: ReminderStatus.ACTIVE,
      },
      relations: ['elderlyUser', 'caregiverUser'],
      order: { reminderDateTime: 'ASC' },
    });

    return reminders;
  }

  async findActive(caregiverUserId: string) {
    const reminders = await this.reminderRepository.find({
      where: { caregiverUserId, status: ReminderStatus.ACTIVE },
      relations: ['elderlyUser', 'caregiverUser'],
      order: { reminderDateTime: 'ASC' },
    });

    return reminders;
  }

  async findOne(id: string, caregiverUserId: string) {
    const reminder = await this.reminderRepository.findOne({
      where: { id, caregiverUserId },
      relations: ['elderlyUser', 'caregiverUser'],
    });

    if (!reminder) {
      throw new NotFoundException(`Lembrete com ID ${id} não encontrado`);
    }

    return reminder;
  }

  async update(id: string, updateReminderDto: UpdateReminderDto, caregiverUserId: string) {
    const reminder = await this.findOne(id, caregiverUserId);

    // Se está alterando o idoso, criar novo relacionamento se necessário
    if (updateReminderDto.elderlyUserId && updateReminderDto.elderlyUserId !== reminder.elderlyUserId) {
      await this.caregiverElderlyService.createRelationshipIfNotExists(caregiverUserId, updateReminderDto.elderlyUserId);
    }

    const updateData: any = { ...updateReminderDto };

    // Atualizar datas se fornecidas
    if (updateReminderDto.reminderDateTime) {
      updateData.reminderDateTime = new Date(updateReminderDto.reminderDateTime);
      updateData.nextExecution = this.calculateNextExecution(
        updateData.reminderDateTime,
        updateReminderDto.frequency || reminder.frequency,
        updateReminderDto.customIntervalMinutes || reminder.customIntervalMinutes
      );
    }

    if (updateReminderDto.endDate) {
      updateData.endDate = new Date(updateReminderDto.endDate);
    }

    await this.reminderRepository.update(id, updateData);
    
    const updatedReminder = await this.reminderRepository.findOne({
      where: { id },
      relations: ['elderlyUser', 'caregiverUser'],
    });

    return {
      message: 'Lembrete atualizado com sucesso',
      reminder: updatedReminder,
    };
  }

  async remove(id: string, caregiverUserId: string) {
    const reminder = await this.findOne(id, caregiverUserId);
    await this.reminderRepository.remove(reminder);
    
    return {
      message: 'Lembrete removido com sucesso',
    };
  }

  async markAsCompleted(id: string, caregiverUserId: string) {
    const reminder = await this.findOne(id, caregiverUserId);
    
    const now = new Date();
    const updateData: any = {
      status: ReminderStatus.COMPLETED,
      lastExecuted: now,
    };

    // Se é um lembrete recorrente, calcular próxima execução
    if (reminder.frequency !== ReminderFrequency.ONCE) {
      const nextExecution = this.calculateNextExecution(now, reminder.frequency, reminder.customIntervalMinutes);
      
      // Se há data de fim e a próxima execução é após essa data, marcar como completado definitivamente
      if (reminder.endDate && nextExecution && nextExecution > reminder.endDate) {
        updateData.nextExecution = null;
      } else if (nextExecution) {
        updateData.status = ReminderStatus.ACTIVE;
        updateData.nextExecution = nextExecution;
        updateData.reminderDateTime = nextExecution;
      }
    }

    await this.reminderRepository.update(id, updateData);

    return {
      message: 'Lembrete marcado como concluído',
    };
  }

  async snooze(id: string, minutes: number, caregiverUserId: string) {
    const reminder = await this.findOne(id, caregiverUserId);
    
    const newDateTime = new Date(reminder.reminderDateTime.getTime() + (minutes * 60 * 1000));
    
    await this.reminderRepository.update(id, {
      status: ReminderStatus.SNOOZED,
      reminderDateTime: newDateTime,
    });

    return {
      message: `Lembrete adiado por ${minutes} minutos`,
    };
  }

  /**
   * Buscar todos os lembretes de um idoso específico (para o próprio idoso acessar)
   */
  async findAllByElderlyUser(elderlyUserId: string) {
    const reminders = await this.reminderRepository.find({
      where: { elderlyUserId },
      relations: ['elderlyUser', 'caregiverUser'],
      order: { reminderDateTime: 'ASC' },
    });

    return reminders;
  }

  private calculateNextExecution(currentDate: Date, frequency: ReminderFrequency, customIntervalMinutes?: number): Date | null {
    const nextDate = new Date(currentDate);

    switch (frequency) {
      case ReminderFrequency.DAILY:
        nextDate.setDate(nextDate.getDate() + 1);
        break;
      case ReminderFrequency.WEEKLY:
        nextDate.setDate(nextDate.getDate() + 7);
        break;
      case ReminderFrequency.MONTHLY:
        nextDate.setMonth(nextDate.getMonth() + 1);
        break;
      case ReminderFrequency.CUSTOM:
        if (customIntervalMinutes) {
          nextDate.setMinutes(nextDate.getMinutes() + customIntervalMinutes);
        }
        break;
      case ReminderFrequency.ONCE:
      default:
        return null;
    }

    return nextDate;
  }

}
