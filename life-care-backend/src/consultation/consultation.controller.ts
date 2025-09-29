import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { ConsultationService } from './consultation.service';
import { CreateConsultationDto } from './dto/create-consultation.dto';
import { UpdateConsultationDto } from './dto/update-consultation.dto';
import { ConsultationStatus } from './consultation.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('consultations')
@Controller('consultations')
@ApiBearerAuth('JWT-auth')
@UseGuards(JwtAuthGuard)
export class ConsultationController {
  constructor(private readonly consultationService: ConsultationService) {}

  @Post()
  @ApiOperation({ summary: 'Agendar uma nova consulta para um idoso' })
  @ApiResponse({
    status: 201,
    description: 'Consulta agendada com sucesso.',
  })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  @ApiResponse({ status: 403, description: 'Acesso negado ao paciente.' })
  async create(@Body() createConsultationDto: CreateConsultationDto, @Request() req) {
    const caregiverId = req.user.sub;
    return this.consultationService.create(createConsultationDto, caregiverId);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as consultas dos idosos do cuidador' })
  @ApiResponse({
    status: 200,
    description: 'Lista de consultas retornada com sucesso.',
  })
  findAllByCaregiver(@Request() req) {
    const caregiverId = req.user.sub;
    return this.consultationService.findAllByCaregiver(caregiverId);
  }

  @Get('my-consultations')
  @ApiOperation({ summary: 'Listar minhas consultas (para idosos e cuidadores)' })
  @ApiResponse({ 
    status: 200, 
    description: 'Lista de consultas retornada com sucesso.' 
  })
  findMyConsultations(@Request() req) {
    const userId = req.user.sub;
    const userRole = req.user.role;

    if (userRole === UserRole.PATIENT) {
      return this.consultationService.findAllByElderlyUser(userId);
    }

    // Por padrão ou se for CAREGIVER, busca as do cuidador
    return this.consultationService.findAllByCaregiver(userId);
  }

  @Get('upcoming')
  @ApiOperation({ summary: 'Listar consultas futuras dos idosos do cuidador' })
  @ApiResponse({
    status: 200,
    description: 'Lista de consultas futuras retornada com sucesso.',
  })
  findUpcoming(@Request() req) {
    const caregiverId = req.user.sub;
    return this.consultationService.findUpcoming(caregiverId);
  }

  @Get('patient/:patientId')
  @ApiOperation({ summary: 'Listar consultas de um idoso específico' })
  @ApiResponse({
    status: 200,
    description: 'Lista de consultas do idoso retornada com sucesso.',
  })
  @ApiResponse({ status: 403, description: 'Acesso negado ao paciente.' })
  findAllByPatient(@Param('patientId') patientId: string, @Request() req) {
    const caregiverId = req.user.sub;
    return this.consultationService.findAllByPatient(patientId, caregiverId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma consulta pelo ID' })
  @ApiResponse({
    status: 200,
    description: 'Consulta encontrada com sucesso.',
  })
  @ApiResponse({ status: 404, description: 'Consulta não encontrada.' })
  @ApiResponse({ status: 403, description: 'Acesso negado.' })
  findOne(@Param('id') id: string, @Request() req) {
    const caregiverId = req.user.sub;
    return this.consultationService.findOne(id, caregiverId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar dados de uma consulta' })
  @ApiResponse({
    status: 200,
    description: 'Consulta atualizada com sucesso.',
  })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  @ApiResponse({ status: 404, description: 'Consulta não encontrada.' })
  @ApiResponse({ status: 403, description: 'Acesso negado.' })
  update(
    @Param('id') id: string,
    @Body() updateConsultationDto: UpdateConsultationDto,
    @Request() req,
  ) {
    const caregiverId = req.user.sub;
    return this.consultationService.update(id, updateConsultationDto, caregiverId);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma consulta' })
  @ApiResponse({ status: 200, description: 'Consulta removida com sucesso.' })
  @ApiResponse({ status: 404, description: 'Consulta não encontrada.' })
  @ApiResponse({ status: 403, description: 'Acesso negado.' })
  remove(@Param('id') id: string, @Request() req) {
    const caregiverId = req.user.sub;
    return this.consultationService.remove(id, caregiverId);
  }

  @Patch(':id/status/:status')
  @ApiOperation({ summary: 'Atualizar status de uma consulta' })
  @ApiResponse({
    status: 200,
    description: 'Status da consulta atualizado com sucesso.',
  })
  @ApiResponse({ status: 404, description: 'Consulta não encontrada.' })
  @ApiResponse({ status: 403, description: 'Acesso negado.' })
  updateStatus(
    @Param('id') id: string,
    @Param('status') status: ConsultationStatus,
    @Request() req,
  ) {
    const caregiverId = req.user.sub;
    return this.consultationService.updateStatus(id, status, caregiverId);
  }
}
