import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medication } from './entities/elderly-medication.entity';
import { ElderlyMedicationService } from './elderly-medication.service';
import { CaregiverMedicationController } from './controllers/caregiver-medication.controller';
import { ElderlyMedicationController } from './controllers/elderly-medication.controller';
import { MedicationController } from './controllers/medication.controller';
import { UsersModule } from '../users/users.module';
import { CaregiverElderly } from '../users/entities/caregiver-elderly.entity';
import { CaregiverElderlyService } from '../users/caregiver-elderly.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Medication, CaregiverElderly]),
    UsersModule,
  ],
  controllers: [
    CaregiverMedicationController, 
    ElderlyMedicationController,
    MedicationController
  ],
  providers: [ElderlyMedicationService, CaregiverElderlyService],
  exports: [ElderlyMedicationService],
})
export class ElderlyMedicationModule {}
