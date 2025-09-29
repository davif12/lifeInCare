// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { LocationModule } from './location/location/location.module';
import { GlobalExceptionFilter } from './common/filters/global-exception.filter';
import { ElderlyModule } from './elderly/elderly.module';
import { ElderlyMedicationModule } from './elderly-medication/elderly-medication.module';
import configuration from './config/configuration';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { ConsultationModule } from './consultation/consultation.module';
import { ReminderModule } from './reminder/reminder.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 60_000, // 60s in ms
        limit: 100,
      },
    ]),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '2210',
        database: 'lifecare',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        dropSchema: false, // Schema já foi recriado
        logging: true,
        ssl: false,
        extra: {
          trustServerCertificate: true,
        },
        charset: 'utf8',
      }),
    }), 
    UsersModule,
    AuthModule,
    ElderlyModule,
    LocationModule,
    ElderlyMedicationModule, 
    ConsultationModule,
    ReminderModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
