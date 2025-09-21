import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Location } from '../../location/location/location.entity';
import { Consultation } from '../../consultation/consultation.entity';
import { Reminder } from '../../reminder/reminder.entity';

export enum UserRole {
  ADMIN = 'admin',
  PATIENT = 'patient',
  CAREGIVER = 'caregiver',
}

@Entity('users')
export class User {
  @ApiProperty({ description: 'ID único do usuário' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'Nome completo do usuário' })
  @Column()
  name: string;

  @ApiProperty({ description: 'Email do usuário' })
  @Column({ unique: true })
  email: string;

  @ApiProperty({
    description: 'Senha do usuário (não retornada nas respostas)',
  })
  @Column()
  @Exclude()
  password: string;

  @ApiProperty({ description: 'Função do usuário no sistema', enum: UserRole })
  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.PATIENT,
  })
  role: UserRole;

  @ApiProperty({ description: 'Indica se o usuário está ativo' })
  @Column({ default: true })
  isActive: boolean;

  @ApiProperty({ description: 'Indica se o email do usuário foi verificado' })
  @Column({ default: false })
  isEmailVerified: boolean;

  @ApiProperty({ description: 'Token de verificação de email' })
  @Column({ nullable: true })
  @Exclude()
  verificationToken: string;

  @ApiProperty({ description: 'Data de expiração do token de verificação' })
  @Column({ nullable: true })
  @Exclude()
  verificationTokenExpires: Date;

  @ApiProperty({
    description: 'PIN para login simplificado (apenas para pacientes)',
  })
  @Column({ nullable: true })
  @Exclude()
  pin: string;

  // Campos específicos do paciente (idoso) - NULLABLE para migração
  @ApiProperty({ description: 'Idade do usuário (se for paciente)', required: false })
  @Column({ nullable: true })
  age?: number;

  @ApiProperty({ description: 'Condição médica (se for paciente)', required: false })
  @Column({ nullable: true })
  medicalCondition?: string;

  @ApiProperty({ description: 'Contato de emergência (se for paciente)', required: false })
  @Column({ nullable: true })
  emergencyContact?: string;

  @ApiProperty({ description: 'Telefone de emergência (se for paciente)', required: false })
  @Column({ nullable: true })
  emergencyPhone?: string;

  @ApiProperty({ description: 'Endereço (se for paciente)', required: false })
  @Column({ nullable: true })
  address?: string;

  @ApiProperty({ description: 'Notas médicas (se for paciente)', required: false })
  @Column({ type: 'text', nullable: true })
  notes?: string;

  // Campos específicos do cuidador - NULLABLE para migração
  @ApiProperty({ description: 'Especialização (se for cuidador)', required: false })
  @Column({ nullable: true })
  specialization?: string;

  @ApiProperty({ description: 'Anos de experiência (se for cuidador)', required: false })
  @Column({ nullable: true })
  yearsOfExperience?: number;

  @ApiProperty({ description: 'Biografia (se for cuidador)', required: false })
  @Column({ type: 'text', nullable: true })
  biography?: string;

  @ApiProperty({ description: 'Certificações (se for cuidador)', required: false })
  @Column({ type: 'text', nullable: true })
  certifications?: string;

  @ApiProperty({ description: 'Disponibilidade (se for cuidador)', required: false })
  @Column({ nullable: true, default: true })
  isAvailable?: boolean;

  @ApiProperty({ description: 'Data de criação do registro' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: 'Data da última atualização do registro' })
  @UpdateDateColumn()
  updatedAt: Date;

  // Relacionamentos diretos (sem Patient/Caregiver intermediários)
  @ApiProperty({
    description: 'Localizações registradas do usuário',
    type: () => [Location],
  })
  @OneToMany(() => Location, (location) => location.user)
  locations: Location[];

  @ApiProperty({
    description: 'Consultas como idoso',
    type: () => [Consultation],
  })
  @OneToMany(() => Consultation, (consultation) => consultation.elderlyUser)
  elderlyConsultations: Consultation[];

  @ApiProperty({
    description: 'Consultas como cuidador',
    type: () => [Consultation],
  })
  @OneToMany(() => Consultation, (consultation) => consultation.caregiverUser)
  caregiverConsultations: Consultation[];

  @ApiProperty({
    description: 'Lembretes como idoso',
    type: () => [Reminder],
  })
  @OneToMany(() => Reminder, (reminder) => reminder.elderlyUser)
  elderlyReminders: Reminder[];

  @ApiProperty({
    description: 'Lembretes como cuidador',
    type: () => [Reminder],
  })
  @OneToMany(() => Reminder, (reminder) => reminder.caregiverUser)
  caregiverReminders: Reminder[];
}
