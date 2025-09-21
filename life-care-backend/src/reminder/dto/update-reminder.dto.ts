import { PartialType } from '@nestjs/swagger';
import { CreateReminderDto } from './create-reminder.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsEnum } from 'class-validator';
import { ReminderStatus } from '../reminder.entity';

export class UpdateReminderDto extends PartialType(CreateReminderDto) {
  @ApiProperty({ description: 'Status do lembrete', enum: ReminderStatus, required: false })
  @IsOptional()
  @IsEnum(ReminderStatus)
  status?: ReminderStatus;
}
