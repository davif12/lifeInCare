import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString, IsOptional, IsEnum, IsNumber, IsBoolean, Min, Max } from 'class-validator';
import { ReminderType, ReminderFrequency } from '../reminder.entity';

export class CreateReminderDto {
  @ApiProperty({ description: 'Título do lembrete' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'Descrição detalhada do lembrete' })
  @IsString()
  description: string;

  @ApiProperty({ description: 'Tipo do lembrete', enum: ReminderType })
  @IsEnum(ReminderType)
  type: ReminderType;

  @ApiProperty({ description: 'Data e hora do lembrete' })
  @IsDateString()
  reminderDateTime: string;

  @ApiProperty({ description: 'Frequência do lembrete', enum: ReminderFrequency })
  @IsEnum(ReminderFrequency)
  frequency: ReminderFrequency;

  @ApiProperty({ description: 'Intervalo personalizado em minutos (para frequência custom)', required: false })
  @IsOptional()
  @IsNumber()
  @Min(1)
  customIntervalMinutes?: number;

  @ApiProperty({ description: 'Data de fim para lembretes recorrentes', required: false })
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiProperty({ description: 'Prioridade do lembrete (1-5, sendo 5 mais importante)', required: false })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(5)
  priority?: number;

  @ApiProperty({ description: 'Se o lembrete deve enviar notificação', required: false })
  @IsOptional()
  @IsBoolean()
  sendNotification?: boolean;

  @ApiProperty({ description: 'Minutos antes para enviar notificação antecipada', required: false })
  @IsOptional()
  @IsNumber()
  @Min(0)
  notificationMinutesBefore?: number;

  @ApiProperty({ description: 'Observações adicionais', required: false })
  @IsOptional()
  @IsString()
  notes?: string;

  @ApiProperty({ description: 'ID do idoso' })
  @IsString()
  elderlyUserId: string;
}
