import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from './user.entity';

@Entity('caregiver_elderly')
export class CaregiverElderly {
  @ApiProperty({ description: 'ID único do relacionamento' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'ID do cuidador' })
  @Column({ name: 'caregiver_user_id' })
  caregiverUserId: string;

  @ApiProperty({ description: 'ID do idoso' })
  @Column({ name: 'elderly_user_id' })
  elderlyUserId: string;

  @ApiProperty({ description: 'Data de criação do relacionamento' })
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  // Relacionamentos
  @ApiProperty({
    description: 'Cuidador do relacionamento',
    type: () => User,
  })
  @ManyToOne(() => User, { lazy: true })
  @JoinColumn({ name: 'caregiver_user_id' })
  caregiver: User;

  @ApiProperty({
    description: 'Idoso do relacionamento',
    type: () => User,
  })
  @ManyToOne(() => User, { lazy: true })
  @JoinColumn({ name: 'elderly_user_id' })
  elderly: User;
}
