import { PartialType } from '@nestjs/swagger';
import { CreateElderlyMedicationDto } from './create-elderly-medication.dto';

export class UpdateElderlyMedicationDto extends PartialType(CreateElderlyMedicationDto) {}
