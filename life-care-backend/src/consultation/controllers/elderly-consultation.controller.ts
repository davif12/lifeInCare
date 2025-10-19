import {
  Controller,
  Get,
  Patch,
  Param,
  UseGuards,
  Request,
  NotFoundException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { ConsultationService } from '../consultation.service';
import { ConsultationStatus } from '../consultation.entity';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

@ApiTags('elderly-consultations')
@Controller('elderly/consultations')
@ApiBearerAuth('JWT-auth')
@UseGuards(JwtAuthGuard)
export class ElderlyConsultationController {
  constructor(private readonly consultationService: ConsultationService) {}

  @Get('my-consultations')
  @ApiOperation({ summary: 'Buscar consultas do idoso logado' })
  @ApiResponse({
    status: 200,
    description: 'Lista de consultas do idoso retornada com sucesso.',
  })
  async getMyConsultations(@Request() req) {
    const elderlyUserId = req.user.sub || req.user.userId;
    
    // Buscar consultas onde o idoso é o paciente
    const consultations = await this.consultationService.findAllByElderlyUser(elderlyUserId);
    
    return {
      message: 'Consultas encontradas com sucesso',
      consultations,
    };
  }

  @Get('dashboard')
  @ApiOperation({ summary: 'Dashboard completo de consultas do idoso' })
  @ApiResponse({
    status: 200,
    description: 'Dashboard de consultas retornado com sucesso.',
  })
  async getDashboard(@Request() req) {
    const elderlyUserId = req.user.sub || req.user.userId;
    
    const allConsultations = await this.consultationService.findAllByElderlyUser(elderlyUserId);
    const scheduledConsultations = allConsultations.filter(c => c.status === 'scheduled');
    const upcomingConsultations = allConsultations.filter(c => 
      c.status === 'scheduled' && 
      new Date(c.scheduledDateTime) > new Date() &&
      new Date(c.scheduledDateTime) <= new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // próximos 7 dias
    );
    
    return {
      message: 'Dashboard de consultas carregado com sucesso',
      data: {
        total: allConsultations.length,
        scheduled: scheduledConsultations.length,
        upcoming: upcomingConsultations.length,
        consultations: allConsultations,
        upcomingConsultations,
      },
    };
  }

  @Patch(':id/status/:status')
  @ApiOperation({ summary: 'Atualizar status de uma consulta (apenas para o idoso)' })
  @ApiResponse({
    status: 200,
    description: 'Status da consulta atualizado com sucesso.',
  })
  @ApiResponse({ status: 404, description: 'Consulta não encontrada.' })
  @ApiResponse({ status: 403, description: 'Acesso negado.' })
  async updateStatus(
    @Param('id') id: string,
    @Param('status') status: ConsultationStatus,
    @Request() req,
  ) {
    const elderlyUserId = req.user.sub || req.user.userId;
    
    // Buscar a consulta para verificar se pertence ao idoso
    const consultation = await this.consultationService.findAllByElderlyUser(elderlyUserId);
    const targetConsultation = consultation.find(c => c.id === id);
    
    if (!targetConsultation) {
      throw new NotFoundException(`Consulta com ID ${id} não encontrada`);
    }
    
    // Atualizar status usando o método do service
    await this.consultationService.updateStatusByElderly(id, status);
    
    return {
      message: `Status da consulta alterado para ${status} com sucesso`,
    };
  }
}
