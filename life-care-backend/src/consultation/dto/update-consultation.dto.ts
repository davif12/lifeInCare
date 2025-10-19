import { PartialType } from '@nestjs/swagger';
import { CreateConsultationDto } from './create-consultation.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsEnum, IsString } from 'class-validator';
import { ConsultationStatus } from '../consultation.entity';
import { IsFlexibleDate } from '../validators/flexible-date.validator';

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

  @ApiProperty({ 
    description: 'Próxima consulta recomendada (formato: YYYY-MM-DD ou ISO 8601)', 
    required: false,
    example: '2024-12-25'
  })
  @IsOptional()
  @IsFlexibleDate({ message: 'nextAppointment deve ser uma data válida no formato YYYY-MM-DD ou ISO 8601' })
  nextAppointment?: string;
}
