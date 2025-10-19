import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThan } from 'typeorm';
import { Consultation, ConsultationStatus } from './consultation.entity';
import { User, UserRole } from '../users/entities/user.entity';
import { CreateConsultationDto } from './dto/create-consultation.dto';
import { UpdateConsultationDto } from './dto/update-consultation.dto';
import { CaregiverElderlyService } from '../users/caregiver-elderly.service';

@Injectable()
export class ConsultationService {
  constructor(
    @InjectRepository(Consultation)
    private consultationRepository: Repository<Consultation>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private caregiverElderlyService: CaregiverElderlyService,
  ) {}

  async create(createConsultationDto: CreateConsultationDto, caregiverId: string) {
    // Criar relacionamento cuidador-idoso automaticamente (se não existir)
    await this.caregiverElderlyService.createRelationshipIfNotExists(caregiverId, createConsultationDto.elderlyUserId);

    const consultation = this.consultationRepository.create({
      ...createConsultationDto,
      caregiverUserId: caregiverId,
      scheduledDateTime: new Date(createConsultationDto.scheduledDateTime),
    });

    const savedConsultation = await this.consultationRepository.save(consultation);
    
    return {
      message: 'Consulta agendada com sucesso',
      consultation: savedConsultation,
    };
  }

  async findAllByPatient(elderlyUserId: string, caregiverUserId: string) {
    const consultations = await this.consultationRepository.find({
      where: { elderlyUserId, caregiverUserId },
      order: { scheduledDateTime: 'DESC' },
    });

    return consultations;
  }

  async findAllByCaregiver(caregiverUserId: string) {
    const consultations = await this.consultationRepository.find({
      where: { caregiverUserId },
      relations: ['elderlyUser', 'caregiverUser'],
      order: { scheduledDateTime: 'DESC' },
    });

    return consultations;
  }

  async findUpcoming(caregiverUserId: string) {
    const consultations = await this.consultationRepository.find({
      where: {
        caregiverUserId,
        scheduledDateTime: MoreThan(new Date()),
        status: ConsultationStatus.SCHEDULED,
      },
      relations: ['elderlyUser', 'caregiverUser'],
      order: { scheduledDateTime: 'ASC' },
    });

    return consultations;
  }

  async findOne(id: string, caregiverUserId: string) {
    const consultation = await this.consultationRepository.findOne({
      where: { id, caregiverUserId },
      relations: ['elderlyUser', 'caregiverUser'],
    });

    if (!consultation) {
      throw new NotFoundException(`Consulta com ID ${id} não encontrada`);
    }

    return consultation;
  }

  async update(id: string, updateConsultationDto: UpdateConsultationDto, caregiverUserId: string) {
    const consultation = await this.findOne(id, caregiverUserId);

    // Se está alterando o idoso, criar novo relacionamento se necessário
    if (updateConsultationDto.elderlyUserId && updateConsultationDto.elderlyUserId !== consultation.elderlyUserId) {
      await this.caregiverElderlyService.createRelationshipIfNotExists(caregiverUserId, updateConsultationDto.elderlyUserId);
    }

    const updateData = {
      ...updateConsultationDto,
      scheduledDateTime: updateConsultationDto.scheduledDateTime 
        ? new Date(updateConsultationDto.scheduledDateTime) 
        : consultation.scheduledDateTime,
      nextAppointment: updateConsultationDto.nextAppointment 
        ? new Date(updateConsultationDto.nextAppointment) 
        : consultation.nextAppointment,
    };

    await this.consultationRepository.update(id, updateData);
    
    const updatedConsultation = await this.consultationRepository.findOne({
      where: { id },
      relations: ['elderlyUser', 'caregiverUser'],
    });

    return {
      message: 'Consulta atualizada com sucesso',
      consultation: updatedConsultation,
    };
  }

  async remove(id: string, caregiverUserId: string) {
    const consultation = await this.findOne(id, caregiverUserId);
    await this.consultationRepository.remove(consultation);
    
    return {
      message: 'Consulta removida com sucesso',
    };
  }

  async updateStatus(id: string, status: ConsultationStatus, caregiverUserId: string) {
    const consultation = await this.findOne(id, caregiverUserId);
    
    await this.consultationRepository.update(id, { status });

    return {
      message: `Status da consulta alterado para ${status} com sucesso`,
    };
  }

  /**
   * Buscar todas as consultas de um idoso específico (para o próprio idoso acessar)
   */
  async findAllByElderlyUser(elderlyUserId: string) {
    const consultations = await this.consultationRepository.find({
      where: { elderlyUserId },
      relations: ['elderlyUser', 'caregiverUser'],
      order: { scheduledDateTime: 'DESC' },
    });

    return consultations;
  }

  /**
   * Atualizar status de consulta pelo idoso (sem verificar caregiverUserId)
   */
  async updateStatusByElderly(id: string, status: ConsultationStatus) {
    const consultation = await this.consultationRepository.findOne({
      where: { id },
      relations: ['elderlyUser', 'caregiverUser'],
    });

    if (!consultation) {
      throw new NotFoundException(`Consulta com ID ${id} não encontrada`);
    }
    
    await this.consultationRepository.update(id, { status });

    return {
      message: `Status da consulta alterado para ${status} com sucesso`,
    };
  }

}
