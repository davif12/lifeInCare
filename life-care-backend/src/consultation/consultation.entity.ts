import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/entities/user.entity';

export enum ConsultationType {
  ROUTINE = 'routine',
  EMERGENCY = 'emergency',
  FOLLOW_UP = 'follow_up',
  SPECIALIST = 'specialist',
}

export enum ConsultationStatus {
  SCHEDULED = 'scheduled',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
  RESCHEDULED = 'rescheduled',
}

@Entity('consultations')
export class Consultation {
  @ApiProperty({ description: 'ID único da consulta' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'Tipo da consulta' })
  @Column({
    type: 'enum',
    enum: ConsultationType,
    default: ConsultationType.ROUTINE,
  })
  type: ConsultationType;

  @ApiProperty({ description: 'Nome do médico ou especialista' })
  @Column()
  doctorName: string;

  @ApiProperty({ description: 'Especialidade médica' })
  @Column()
  specialty: string;

  @ApiProperty({ description: 'Local da consulta (clínica, hospital, etc.)' })
  @Column()
  location: string;

  @ApiProperty({ description: 'Data e hora da consulta' })
  @Column('timestamp')
  scheduledDateTime: Date;

  @ApiProperty({ description: 'Status da consulta' })
  @Column({
    type: 'enum',
    enum: ConsultationStatus,
    default: ConsultationStatus.SCHEDULED,
  })
  status: ConsultationStatus;

  @ApiProperty({ description: 'Motivo da consulta' })
  @Column({ type: 'text' })
  reason: string;

  @ApiProperty({ description: 'Observações da consulta' })
  @Column({ type: 'text', nullable: true })
  notes: string;

  @ApiProperty({ description: 'Resultado ou diagnóstico da consulta' })
  @Column({ type: 'text', nullable: true })
  result: string;

  @ApiProperty({ description: 'Prescrições ou recomendações médicas' })
  @Column({ type: 'text', nullable: true })
  prescriptions: string;

  @ApiProperty({ description: 'Próxima consulta recomendada' })
  @Column('date', { nullable: true })
  nextAppointment: Date;

  @ApiProperty({ description: 'Data de criação do registro' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: 'Data da última atualização do registro' })
  @UpdateDateColumn()
  updatedAt: Date;

  @ApiProperty({ description: 'ID do idoso associado' })
  @Column({ name: 'elderly_user_id' })
  elderlyUserId: string;

  @ApiProperty({ description: 'ID do cuidador que criou a consulta' })
  @Column({ name: 'caregiver_user_id' })
  caregiverUserId: string;

  // Relacionamentos
  @ApiProperty({
    description: 'Idoso associado à consulta',
    type: () => User,
  })
  @ManyToOne(() => User, { lazy: true })
  @JoinColumn({ name: 'elderly_user_id' })
  elderlyUser: User;

  @ApiProperty({
    description: 'Cuidador que criou a consulta',
    type: () => User,
  })
  @ManyToOne(() => User, { lazy: true })
  @JoinColumn({ name: 'caregiver_user_id' })
  caregiverUser: User;
}
