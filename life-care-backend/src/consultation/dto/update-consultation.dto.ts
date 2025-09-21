import { PartialType } from '@nestjs/swagger';
import { CreateConsultationDto } from './create-consultation.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsEnum, IsString, IsDateString } from 'class-validator';
import { ConsultationStatus } from '../consultation.entity';

export class UpdateConsultationDto extends PartialType(CreateConsultationDto) {
  @ApiProperty({ description: 'Status da consulta', enum: ConsultationStatus, required: false })
  @IsOptional()
  @IsEnum(ConsultationStatus)
  status?: ConsultationStatus;

  @ApiProperty({ description: 'Resultado ou diagnóstico da consulta', required: false })
  @IsOptional()
  @IsString()
  result?: string;

  @ApiProperty({ description: 'Prescrições ou recomendações médicas', required: false })
  @IsOptional()
  @IsString()
  prescriptions?: string;

  @ApiProperty({ description: 'Próxima consulta recomendada', required: false })
  @IsOptional()
  @IsDateString()
  nextAppointment?: string;
}
