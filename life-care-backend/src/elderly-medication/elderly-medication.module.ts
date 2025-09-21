import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medication } from './entities/elderly-medication.entity';
import { ElderlyMedicationService } from './elderly-medication.service';
import { CaregiverMedicationController } from './controllers/caregiver-medication.controller';
import { MedicationController } from './controllers/elderly-medication.controller';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Medication]),
    UsersModule,
  ],
  controllers: [CaregiverMedicationController, MedicationController],
  providers: [ElderlyMedicationService],
  exports: [ElderlyMedicationService],
})
export class ElderlyMedicationModule {}
