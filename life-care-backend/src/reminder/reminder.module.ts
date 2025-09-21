import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReminderService } from './reminder.service';
import { ReminderController } from './reminder.controller';
import { ElderlyReminderController } from './controllers/elderly-reminder.controller';
import { Reminder } from './reminder.entity';
import { User } from '../users/entities/user.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Reminder, User]),
    UsersModule,
  ],
  controllers: [ReminderController, ElderlyReminderController],
  providers: [ReminderService],
  exports: [ReminderService],
})
export class ReminderModule {}
