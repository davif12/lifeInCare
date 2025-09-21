import {
  Controller,
  Get,
  UseGuards,
  Request,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { ReminderService } from '../reminder.service';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

@ApiTags('elderly-reminders')
@Controller('elderly/reminders')
@ApiBearerAuth('JWT-auth')
@UseGuards(JwtAuthGuard)
export class ElderlyReminderController {
  constructor(private readonly reminderService: ReminderService) {}

  @Get('my-reminders')
  @ApiOperation({ summary: 'Buscar lembretes do idoso logado' })
  @ApiResponse({
    status: 200,
    description: 'Lista de lembretes do idoso retornada com sucesso.',
  })
  async getMyReminders(@Request() req) {
    const elderlyUserId = req.user.sub || req.user.userId;
    
    // Buscar lembretes onde o idoso é o destinatário
    const reminders = await this.reminderService.findAllByElderlyUser(elderlyUserId);
    
    return {
      message: 'Lembretes encontrados com sucesso',
      reminders,
    };
  }

  @Get('dashboard')
  @ApiOperation({ summary: 'Dashboard completo de lembretes do idoso' })
  @ApiResponse({
    status: 200,
    description: 'Dashboard de lembretes retornado com sucesso.',
  })
  async getDashboard(@Request() req) {
    const elderlyUserId = req.user.sub || req.user.userId;
    
    const allReminders = await this.reminderService.findAllByElderlyUser(elderlyUserId);
    const activeReminders = allReminders.filter(r => r.status === 'active');
    const upcomingReminders = allReminders.filter(r => 
      r.status === 'active' && 
      new Date(r.reminderDateTime) > new Date() &&
      new Date(r.reminderDateTime) <= new Date(Date.now() + 24 * 60 * 60 * 1000)
    );
    
    return {
      message: 'Dashboard de lembretes carregado com sucesso',
      data: {
        total: allReminders.length,
        active: activeReminders.length,
        upcoming: upcomingReminders.length,
        reminders: allReminders,
        upcomingReminders,
      },
    };
  }
}
