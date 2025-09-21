import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsArray, IsDateString, IsBoolean } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateElderlyMedicationDto {
  @ApiProperty({ description: 'ID do idoso (userId)' })
  @IsString()
  @IsNotEmpty()
  elderlyUserId: string;

  @ApiProperty({ description: 'Nome do medicamento' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Dosagem do medicamento' })
  @IsString()
  @IsNotEmpty()
  dosage: string;

  @ApiProperty({ description: 'Frequência de uso' })
  @IsString()
  @IsNotEmpty()
  frequency: string;

  @ApiProperty({ description: 'Horários de administração', type: [String], required: false })
  @IsArray()
  @IsOptional()
  schedules?: string[];

  @ApiProperty({ description: 'Data de início do tratamento', required: false })
  @Transform(({ value }) => value === '' ? undefined : value)
  @IsDateString()
  @IsOptional()
  startDate?: string;

  @ApiProperty({ description: 'Data de fim do tratamento', required: false })
  @Transform(({ value }) => value === '' ? undefined : value)
  @IsDateString()
  @IsOptional()
  endDate?: string;

  @ApiProperty({ description: 'Instruções especiais', required: false })
  @Transform(({ value }) => value === '' ? undefined : value)
  @IsString()
  @IsOptional()
  instructions?: string;

  @ApiProperty({ description: 'Se o medicamento está ativo', required: false })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @ApiProperty({ description: 'Observações do cuidador', required: false })
  @Transform(({ value }) => value === '' ? undefined : value)
  @IsString()
  @IsOptional()
  notes?: string;
}
