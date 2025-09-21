// src/location/location/location.entity.ts
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../users/entities/user.entity';

@Entity('locations')
export class Location {
  @ApiProperty({ description: 'ID único da localização' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'Latitude da localização' })
  @Column('float')
  latitude: number;

  @ApiProperty({ description: 'Longitude da localização' })
  @Column('float')
  longitude: number;

  @ApiProperty({ description: 'Endereço completo', required: false })
  @Column({ nullable: true })
  address?: string;

  @ApiProperty({ description: 'Data e hora do registro' })
  @CreateDateColumn()
  timestamp: Date;

  @ApiProperty({
    description: 'Usuário associado à localização',
    type: () => User,
  })
  @ManyToOne(() => User, (user) => user.locations, { lazy: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ name: 'user_id' })
  userId: string;
}
