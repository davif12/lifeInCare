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

export enum ReminderType {
  MEDICATION = 'medication',
  APPOINTMENT = 'appointment',
  EXERCISE = 'exercise',
  MEAL = 'meal',
  GENERAL = 'general',
}

export enum ReminderFrequency {
  ONCE = 'once',
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  CUSTOM = 'custom',
}

export enum ReminderStatus {
  ACTIVE = 'active',
  COMPLETED = 'completed',
  SNOOZED = 'snoozed',
  CANCELLED = 'cancelled',
}

@Entity('reminders')
export class Reminder {
  @ApiProperty({ description: 'ID único do lembrete' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'Título do lembrete' })
  @Column()
  title: string;

  @ApiProperty({ description: 'Descrição detalhada do lembrete' })
  @Column({ type: 'text' })
  description: string;

  @ApiProperty({ description: 'Tipo do lembrete' })
  @Column({
    type: 'enum',
    enum: ReminderType,
    default: ReminderType.GENERAL,
  })
  type: ReminderType;

  @ApiProperty({ description: 'Data e hora do lembrete' })
  @Column('timestamp')
  reminderDateTime: Date;

  @ApiProperty({ description: 'Frequência do lembrete' })
  @Column({
    type: 'enum',
    enum: ReminderFrequency,
    default: ReminderFrequency.ONCE,
  })
  frequency: ReminderFrequency;

  @ApiProperty({ description: 'Status do lembrete' })
  @Column({
    type: 'enum',
    enum: ReminderStatus,
    default: ReminderStatus.ACTIVE,
  })
  status: ReminderStatus;

  @ApiProperty({ description: 'Intervalo personalizado em minutos (para frequência custom)' })
  @Column({ nullable: true })
  customIntervalMinutes: number;

  @ApiProperty({ description: 'Data de fim para lembretes recorrentes' })
  @Column('date', { nullable: true })
  endDate: Date;

  @ApiProperty({ description: 'Prioridade do lembrete (1-5, sendo 5 mais importante)' })
  @Column({ default: 3 })
  priority: number;

  @ApiProperty({ description: 'Se o lembrete deve enviar notificação' })
  @Column({ default: true })
  sendNotification: boolean;

  @ApiProperty({ description: 'Minutos antes para enviar notificação antecipada' })
  @Column({ default: 15 })
  notificationMinutesBefore: number;

  @ApiProperty({ description: 'Observações adicionais' })
  @Column({ type: 'text', nullable: true })
  notes: string;

  @ApiProperty({ description: 'Data da última execução (para lembretes recorrentes)' })
  @Column('timestamp', { nullable: true })
  lastExecuted: Date;

  @ApiProperty({ description: 'Próxima data de execução (para lembretes recorrentes)' })
  @Column('timestamp', { nullable: true })
  nextExecution: Date;

  @ApiProperty({ description: 'Data de criação do registro' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: 'Data da última atualização do registro' })
  @UpdateDateColumn()
  updatedAt: Date;

  @ApiProperty({ description: 'ID do idoso associado' })
  @Column({ name: 'elderly_user_id' })
  elderlyUserId: string;

  @ApiProperty({ description: 'ID do cuidador que criou o lembrete' })
  @Column({ name: 'caregiver_user_id' })
  caregiverUserId: string;

  // Relacionamentos
  @ApiProperty({
    description: 'Idoso associado ao lembrete',
    type: () => User,
  })
  @ManyToOne(() => User, { lazy: true })
  @JoinColumn({ name: 'elderly_user_id' })
  elderlyUser: User;

  @ApiProperty({
    description: 'Cuidador que criou o lembrete',
    type: () => User,
  })
  @ManyToOne(() => User, { lazy: true })
  @JoinColumn({ name: 'caregiver_user_id' })
  caregiverUser: User;
}
