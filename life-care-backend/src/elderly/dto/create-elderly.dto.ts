import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsDateString } from 'class-validator';

export class CreateElderlyDto {
  @ApiProperty({ description: 'Nome completo do idoso' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Data de nascimento do idoso' })
  @IsDateString()
  @IsNotEmpty()
  birthDate: string;

  @ApiProperty({ description: 'Informações médicas relevantes', required: false })
  @IsString()
  @IsOptional()
  medicalInfo?: string;

  @ApiProperty({ description: 'Informações de contato de emergência', required: false })
  @IsString()
  @IsOptional()
  contactInfo?: string;
}
