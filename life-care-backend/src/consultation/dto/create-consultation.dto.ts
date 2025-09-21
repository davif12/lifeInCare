import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString, IsOptional, IsEnum } from 'class-validator';
import { ConsultationType, ConsultationStatus } from '../consultation.entity';

export class CreateConsultationDto {
  @ApiProperty({ description: 'Tipo da consulta', enum: ConsultationType })
  @IsEnum(ConsultationType)
  type: ConsultationType;

  @ApiProperty({ description: 'Nome do médico ou especialista' })
  @IsString()
  doctorName: string;

  @ApiProperty({ description: 'Especialidade médica' })
  @IsString()
  specialty: string;

  @ApiProperty({ description: 'Local da consulta (clínica, hospital, etc.)' })
  @IsString()
  location: string;

  @ApiProperty({ description: 'Data e hora da consulta' })
  @IsDateString()
  scheduledDateTime: string;

  @ApiProperty({ description: 'Motivo da consulta' })
  @IsString()
  reason: string;

  @ApiProperty({ description: 'Observações da consulta', required: false })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({ description: 'ID do idoso' })
  @IsString()
  elderlyUserId: string;
}
