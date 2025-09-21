import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CaregiverElderly } from './entities/caregiver-elderly.entity';

@Injectable()
export class CaregiverElderlyService {
  private readonly logger = new Logger(CaregiverElderlyService.name);

  constructor(
    @InjectRepository(CaregiverElderly)
    private caregiverElderlyRepository: Repository<CaregiverElderly>,
  ) {}

  /**
   * Criar relacionamento entre cuidador e idoso (se não existir)
   */
  async createRelationshipIfNotExists(caregiverUserId: string, elderlyUserId: string): Promise<CaregiverElderly> {
    this.logger.log(`Verificando relacionamento entre cuidador ${caregiverUserId} e idoso ${elderlyUserId}`);

    // Verificar se já existe o relacionamento
    let relationship = await this.caregiverElderlyRepository.findOne({
      where: {
        caregiverUserId,
        elderlyUserId,
      },
    });

    if (relationship) {
      this.logger.log('Relacionamento já existe');
      return relationship;
    }

    // Criar novo relacionamento
    this.logger.log('Criando novo relacionamento cuidador-idoso');
    relationship = this.caregiverElderlyRepository.create({
      caregiverUserId,
      elderlyUserId,
    });

    const savedRelationship = await this.caregiverElderlyRepository.save(relationship);
    this.logger.log(`Relacionamento criado com sucesso: ${savedRelationship.id}`);

    return savedRelationship;
  }

  /**
   * Verificar se existe relacionamento entre cuidador e idoso
   */
  async hasRelationship(caregiverUserId: string, elderlyUserId: string): Promise<boolean> {
    const relationship = await this.caregiverElderlyRepository.findOne({
      where: {
        caregiverUserId,
        elderlyUserId,
      },
    });

    return !!relationship;
  }

  /**
   * Buscar todos os idosos de um cuidador
   */
  async getElderlyByCaregiverUserId(caregiverUserId: string): Promise<string[]> {
    const relationships = await this.caregiverElderlyRepository.find({
      where: { caregiverUserId },
    });

    return relationships.map(rel => rel.elderlyUserId);
  }

  /**
   * Buscar todos os cuidadores de um idoso
   */
  async getCaregiversByElderlyUserId(elderlyUserId: string): Promise<string[]> {
    const relationships = await this.caregiverElderlyRepository.find({
      where: { elderlyUserId },
    });

    return relationships.map(rel => rel.caregiverUserId);
  }
}
