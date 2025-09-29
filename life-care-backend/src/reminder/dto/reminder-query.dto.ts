import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsEnum, IsInt, Min, Max } from 'class-validator';
import { Transform } from 'class-transformer';
import { ReminderStatus } from '../reminder.entity';

export class ReminderQueryDto {
  @ApiProperty({ 
    description: 'Status dos lembretes a filtrar', 
    enum: ReminderStatus,
    required: false,
    default: ReminderStatus.ACTIVE
  })
  @IsOptional()
  @IsEnum(ReminderStatus)
  status?: ReminderStatus = ReminderStatus.ACTIVE;

  @ApiProperty({ 
    description: 'Número da página (começando em 1)', 
    required: false,
    default: 1,
    minimum: 1
  })
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsInt()
  @Min(1)
  page?: number = 1;

  @ApiProperty({ 
    description: 'Número de itens por página', 
    required: false,
    default: 20,
    minimum: 1,
    maximum: 100
  })
  @IsOptional()
  @Transform(({ value }) => parseInt(value))
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number = 20;

  @ApiProperty({ 
    description: 'ID do idoso para filtrar lembretes específicos', 
    required: false
  })
  @IsOptional()
  elderlyUserId?: string;
}
