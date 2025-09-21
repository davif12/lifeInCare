import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { CaregiverElderly } from './entities/caregiver-elderly.entity';
import { UsersService } from './users.service';
import { CaregiverElderlyService } from './caregiver-elderly.service';
import { UsersController } from './users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User, CaregiverElderly])],
  controllers: [UsersController],
  providers: [UsersService, CaregiverElderlyService],
  exports: [UsersService, CaregiverElderlyService],
})
export class UsersModule {}
