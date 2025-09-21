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
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiQuery,
} from '@nestjs/swagger';
import { ReminderService } from './reminder.service';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { UpdateReminderDto } from './dto/update-reminder.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('reminders')
@Controller('reminders')
@ApiBearerAuth('JWT-auth')
@UseGuards(JwtAuthGuard)
export class ReminderController {
  constructor(private readonly reminderService: ReminderService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo lembrete para um idoso' })
  @ApiResponse({
    status: 201,
    description: 'Lembrete criado com sucesso.',
  })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  @ApiResponse({ status: 403, description: 'Acesso negado ao paciente.' })
  async create(@Body() createReminderDto: CreateReminderDto, @Request() req) {
    const caregiverId = req.user.sub;
    return this.reminderService.create(createReminderDto, caregiverId);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os lembretes dos idosos do cuidador' })
  @ApiResponse({
    status: 200,
    description: 'Lista de lembretes retornada com sucesso.',
  })
  findAllByCaregiver(@Request() req) {
    const caregiverId = req.user.sub;
    return this.reminderService.findAllByCaregiver(caregiverId);
  }

  @Get('upcoming')
  @ApiOperation({ summary: 'Listar lembretes próximos dos idosos do cuidador' })
  @ApiQuery({ name: 'hours', required: false, description: 'Número de horas para buscar lembretes (padrão: 24)' })
  @ApiResponse({
    status: 200,
    description: 'Lista de lembretes próximos retornada com sucesso.',
  })
  findUpcoming(@Query('hours') hours: string, @Request() req) {
    const caregiverId = req.user.sub;
    const hoursNumber = hours ? parseInt(hours) : 24;
    return this.reminderService.findUpcoming(caregiverId, hoursNumber);
  }

  @Get('active')
  @ApiOperation({ summary: 'Listar lembretes ativos dos idosos do cuidador' })
  @ApiResponse({
    status: 200,
    description: 'Lista de lembretes ativos retornada com sucesso.',
  })
  findActive(@Request() req) {
    const caregiverId = req.user.sub;
    return this.reminderService.findActive(caregiverId);
  }

  @Get('patient/:patientId')
  @ApiOperation({ summary: 'Listar lembretes de um idoso específico' })
  @ApiResponse({
    status: 200,
    description: 'Lista de lembretes do idoso retornada com sucesso.',
  })
  @ApiResponse({ status: 403, description: 'Acesso negado ao paciente.' })
  findAllByPatient(@Param('patientId') patientId: string, @Request() req) {
    const caregiverId = req.user.sub;
    return this.reminderService.findAllByPatient(patientId, caregiverId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um lembrete pelo ID' })
  @ApiResponse({
    status: 200,
    description: 'Lembrete encontrado com sucesso.',
  })
  @ApiResponse({ status: 404, description: 'Lembrete não encontrado.' })
  @ApiResponse({ status: 403, description: 'Acesso negado.' })
  findOne(@Param('id') id: string, @Request() req) {
    const caregiverId = req.user.sub;
    return this.reminderService.findOne(id, caregiverId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar dados de um lembrete' })
  @ApiResponse({
    status: 200,
    description: 'Lembrete atualizado com sucesso.',
  })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  @ApiResponse({ status: 404, description: 'Lembrete não encontrado.' })
  @ApiResponse({ status: 403, description: 'Acesso negado.' })
  update(
    @Param('id') id: string,
    @Body() updateReminderDto: UpdateReminderDto,
    @Request() req,
  ) {
    const caregiverId = req.user.sub;
    return this.reminderService.update(id, updateReminderDto, caregiverId);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um lembrete' })
  @ApiResponse({ status: 200, description: 'Lembrete removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Lembrete não encontrado.' })
  @ApiResponse({ status: 403, description: 'Acesso negado.' })
  remove(@Param('id') id: string, @Request() req) {
    const caregiverId = req.user.sub;
    return this.reminderService.remove(id, caregiverId);
  }

  @Patch(':id/complete')
  @ApiOperation({ summary: 'Marcar lembrete como concluído' })
  @ApiResponse({
    status: 200,
    description: 'Lembrete marcado como concluído com sucesso.',
  })
  @ApiResponse({ status: 404, description: 'Lembrete não encontrado.' })
  @ApiResponse({ status: 403, description: 'Acesso negado.' })
  markAsCompleted(@Param('id') id: string, @Request() req) {
    const caregiverId = req.user.sub;
    return this.reminderService.markAsCompleted(id, caregiverId);
  }

  @Patch(':id/snooze/:minutes')
  @ApiOperation({ summary: 'Adiar lembrete por X minutos' })
  @ApiResponse({
    status: 200,
    description: 'Lembrete adiado com sucesso.',
  })
  @ApiResponse({ status: 404, description: 'Lembrete não encontrado.' })
  @ApiResponse({ status: 403, description: 'Acesso negado.' })
  snooze(
    @Param('id') id: string,
    @Param('minutes') minutes: string,
    @Request() req,
  ) {
    const caregiverId = req.user.sub;
    const minutesNumber = parseInt(minutes);
    return this.reminderService.snooze(id, minutesNumber, caregiverId);
  }
}
