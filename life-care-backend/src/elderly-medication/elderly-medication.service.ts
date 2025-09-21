import { Injectable, NotFoundException, ForbiddenException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Medication } from './entities/elderly-medication.entity';
import { CreateElderlyMedicationDto } from './dto/create-elderly-medication.dto';
import { UpdateElderlyMedicationDto } from './dto/update-elderly-medication.dto';
import { CaregiverElderlyService } from '../users/caregiver-elderly.service';

@Injectable()
export class ElderlyMedicationService {
  private readonly logger = new Logger(ElderlyMedicationService.name);

  constructor(
    @InjectRepository(Medication)
    private elderlyMedicationRepository: Repository<Medication>,
    private caregiverElderlyService: CaregiverElderlyService,
  ) {}

  /**
   * Cadastrar novo medicamento para idoso
   */
  async create(createDto: CreateElderlyMedicationDto, caregiverUserId: string): Promise<Medication> {
    this.logger.log(`Cadastrando medicamento para idoso ${createDto.elderlyUserId} pelo cuidador ${caregiverUserId}`);

    // Criar relacionamento cuidador-idoso automaticamente (se não existir)
    await this.caregiverElderlyService.createRelationshipIfNotExists(caregiverUserId, createDto.elderlyUserId);

    const medication = this.elderlyMedicationRepository.create({
      ...createDto,
      caregiverUserId,
      isActive: createDto.isActive ?? true,
    });

    const savedMedication = await this.elderlyMedicationRepository.save(medication);
    this.logger.log(`Medicamento ${savedMedication.name} cadastrado com sucesso`);

    return savedMedication;
  }

  /**
   * Buscar todos os medicamentos de um idoso
   */
  async findByElderlyUserId(elderlyUserId: string): Promise<Medication[]> {
    this.logger.log(`=== BUSCANDO MEDICAMENTOS PARA IDOSO ===`);
    this.logger.log(`elderlyUserId recebido: "${elderlyUserId}"`);
    this.logger.log(`Tipo do elderlyUserId: ${typeof elderlyUserId}`);

    // Primeiro, vamos verificar se existem medicamentos na tabela
    const totalMedications = await this.elderlyMedicationRepository.count();
    this.logger.log(`Total de medicamentos na tabela: ${totalMedications}`);

    // Verificar medicamentos por elderlyUserId
    const medications = await this.elderlyMedicationRepository.find({
      where: { elderlyUserId },
      order: { createdAt: 'DESC' },
    });

    this.logger.log(`Medicamentos encontrados para elderlyUserId "${elderlyUserId}": ${medications.length}`);

    // Se não encontrou, vamos listar todos os elderlyUserId únicos para debug
    if (medications.length === 0) {
      const allElderlyUserIds = await this.elderlyMedicationRepository
        .createQueryBuilder('medication')
        .select('DISTINCT medication.elderlyUserId', 'elderlyUserId')
        .getRawMany();
      
      this.logger.log(`ElderlyUserIds únicos na tabela: ${JSON.stringify(allElderlyUserIds.map(item => item.elderlyUserId))}`);
    }

    // Log dos medicamentos encontrados
    medications.forEach((med, index) => {
      this.logger.log(`Medicamento ${index + 1}: ${med.name} - elderlyUserId: ${med.elderlyUserId} - caregiverUserId: ${med.caregiverUserId}`);
    });

    return medications;
  }

  /**
   * Buscar medicamentos ativos de um idoso
   */
  async findActiveByElderlyUserId(elderlyUserId: string): Promise<Medication[]> {
    this.logger.log(`Buscando medicamentos ativos para idoso ${elderlyUserId}`);

    const medications = await this.elderlyMedicationRepository.find({
      where: { 
        elderlyUserId,
        isActive: true 
      },
      order: { createdAt: 'DESC' },
    });

    this.logger.log(`Encontrados ${medications.length} medicamentos ativos para o idoso`);
    return medications;
  }

  /**
   * Buscar medicamentos cadastrados por um cuidador
   */
  async findByCaregiverUserId(caregiverUserId: string): Promise<Medication[]> {
    this.logger.log(`Buscando medicamentos cadastrados pelo cuidador ${caregiverUserId}`);

    const medications = await this.elderlyMedicationRepository.find({
      where: { caregiverUserId },
      order: { createdAt: 'DESC' },
    });

    this.logger.log(`Encontrados ${medications.length} medicamentos cadastrados pelo cuidador`);
    return medications;
  }

  /**
   * Buscar um medicamento específico
   */
  async findOne(id: string): Promise<Medication> {
    const medication = await this.elderlyMedicationRepository.findOne({
      where: { id },
    });

    if (!medication) {
      throw new NotFoundException(`Medicamento com ID ${id} não encontrado`);
    }

    return medication;
  }

  /**
   * Atualizar medicamento (apenas pelo cuidador que cadastrou)
   */
  async update(id: string, updateDto: UpdateElderlyMedicationDto, caregiverUserId: string): Promise<Medication> {
    this.logger.log(`Atualizando medicamento ${id} pelo cuidador ${caregiverUserId}`);

    const medication = await this.findOne(id);

    // Verificar se o cuidador tem permissão para atualizar
    if (medication.caregiverUserId !== caregiverUserId) {
      throw new ForbiddenException('Você não tem permissão para atualizar este medicamento');
    }

    // Atualizar campos
    Object.assign(medication, updateDto);
    const updatedMedication = await this.elderlyMedicationRepository.save(medication);

    this.logger.log(`Medicamento ${id} atualizado com sucesso`);
    return updatedMedication;
  }

  /**
   * Desativar medicamento (soft delete)
   */
  async deactivate(id: string, caregiverUserId: string): Promise<Medication> {
    this.logger.log(`Desativando medicamento ${id} pelo cuidador ${caregiverUserId}`);

    const medication = await this.findOne(id);

    // Verificar se o cuidador tem permissão
    if (medication.caregiverUserId !== caregiverUserId) {
      throw new ForbiddenException('Você não tem permissão para desativar este medicamento');
    }

    medication.isActive = false;
    const updatedMedication = await this.elderlyMedicationRepository.save(medication);

    this.logger.log(`Medicamento ${id} desativado com sucesso`);
    return updatedMedication;
  }

  /**
   * Remover medicamento permanentemente
   */
  async remove(id: string, caregiverUserId: string): Promise<void> {
    this.logger.log(`Removendo medicamento ${id} pelo cuidador ${caregiverUserId}`);

    const medication = await this.findOne(id);

    // Verificar se o cuidador tem permissão
    if (medication.caregiverUserId !== caregiverUserId) {
      throw new ForbiddenException('Você não tem permissão para remover este medicamento');
    }

    await this.elderlyMedicationRepository.remove(medication);
    this.logger.log(`Medicamento ${id} removido com sucesso`);
  }

  /**
   * Estatísticas de medicamentos por cuidador
   */
  async getStatsByCaregiverUserId(caregiverUserId: string): Promise<{
    total: number;
    active: number;
    inactive: number;
    elderlyCount: number;
  }> {
    this.logger.log(`Buscando estatísticas para cuidador ${caregiverUserId}`);

    const [total, active, elderlyCount] = await Promise.all([
      this.elderlyMedicationRepository.count({ where: { caregiverUserId } }),
      this.elderlyMedicationRepository.count({ where: { caregiverUserId, isActive: true } }),
      this.elderlyMedicationRepository
        .createQueryBuilder('medication')
        .select('COUNT(DISTINCT medication.elderlyUserId)', 'count')
        .where('medication.caregiverUserId = :caregiverUserId', { caregiverUserId })
        .getRawOne()
        .then(result => parseInt(result.count)),
    ]);

    const stats = {
      total,
      active,
      inactive: total - active,
      elderlyCount,
    };

    this.logger.log(`Estatísticas para cuidador: ${JSON.stringify(stats)}`);
    return stats;
  }

  /**
   * Próximas doses do dia para um idoso
   */
  async getTodayScheduleByElderlyUserId(elderlyUserId: string): Promise<{
    medicationName: string;
    dosage: string;
    time: string;
    instructions?: string;
  }[]> {
    this.logger.log(`Buscando horários de hoje para idoso ${elderlyUserId}`);

    const activeMedications = await this.findActiveByElderlyUserId(elderlyUserId);
    
    const todaySchedule = activeMedications.flatMap(med => {
      if (!med.schedules || med.schedules.length === 0) return [];
      
      return med.schedules.map(time => ({
        medicationName: med.name,
        dosage: med.dosage,
        time,
        instructions: med.instructions,
      }));
    }).sort((a, b) => a.time.localeCompare(b.time));

    this.logger.log(`Encontrados ${todaySchedule.length} horários para hoje`);
    return todaySchedule;
  }
}
