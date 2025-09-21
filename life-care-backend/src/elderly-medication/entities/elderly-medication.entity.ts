import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../users/entities/user.entity';

@Entity('medications')
export class Medication {
  @ApiProperty({ description: 'ID único do medicamento' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'ID do idoso (userId)' })
  @Column({ name: 'elderly_user_id', nullable: true })
  elderlyUserId: string;

  @ApiProperty({ description: 'ID do cuidador que cadastrou' })
  @Column({ name: 'caregiver_user_id', nullable: true })
  caregiverUserId: string;

  @ApiProperty({ description: 'Nome do medicamento' })
  @Column({ length: 200 })
  name: string;

  @ApiProperty({ description: 'Dosagem do medicamento' })
  @Column({ length: 100 })
  dosage: string;

  @ApiProperty({ description: 'Frequência de uso' })
  @Column({ length: 100 })
  frequency: string;

  @ApiProperty({ description: 'Horários de administração', type: [String] })
  @Column('simple-array', { nullable: true })
  schedules: string[];

  @ApiProperty({ description: 'Data de início do tratamento' })
  @Column({ type: 'date', nullable: true })
  startDate: string;

  @ApiProperty({ description: 'Data de fim do tratamento' })
  @Column({ type: 'date', nullable: true })
  endDate: string;

  @ApiProperty({ description: 'Instruções especiais' })
  @Column({ type: 'text', nullable: true })
  instructions: string;

  @ApiProperty({ description: 'Se o medicamento está ativo' })
  @Column({ default: true })
  isActive: boolean;

  @ApiProperty({ description: 'Observações do cuidador' })
  @Column({ type: 'text', nullable: true })
  notes: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  // Relacionamentos com User
  @ApiProperty({
    description: 'Idoso associado ao medicamento',
    type: () => User,
  })
  @ManyToOne(() => User, { lazy: true })
  @JoinColumn({ name: 'elderly_user_id' })
  elderlyUser: User;

  @ApiProperty({
    description: 'Cuidador que cadastrou o medicamento',
    type: () => User,
  })
  @ManyToOne(() => User, { lazy: true })
  @JoinColumn({ name: 'caregiver_user_id' })
  caregiverUser: User;
}
