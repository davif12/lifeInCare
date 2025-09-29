import {
  Controller,
  Get,
  UseGuards,
  Request,
  Logger,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { ElderlyMedicationService } from '../elderly-medication.service';
import { Medication } from '../entities/elderly-medication.entity';

@ApiTags('elderly-medications')
@Controller('elderly/medications')
@ApiBearerAuth('JWT-auth')
@UseGuards(JwtAuthGuard)
export class ElderlyMedicationController {
  private readonly logger = new Logger(ElderlyMedicationController.name);

  constructor(private readonly elderlyMedicationService: ElderlyMedicationService) {}

  @Get('my-medications')
  @ApiOperation({ 
    summary: 'Buscar meus medicamentos',
    description: 'Retorna todos os medicamentos do idoso logado'
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de medicamentos retornada com sucesso.',
    type: [Medication],
  })
  @ApiResponse({ status: 401, description: 'Não autorizado.' })
  async getMyMedications(@Request() req): Promise<Medication[]> {
    this.logger.log('=== IDOSO BUSCANDO SEUS MEDICAMENTOS ===');
    
    const elderlyUserId = req.user.sub || req.user.userId;
    this.logger.log(`Dados completos do usuário JWT:`);
    this.logger.log(`- req.user: ${JSON.stringify(req.user)}`);
    this.logger.log(`- req.user.sub: "${req.user.sub}"`);
    this.logger.log(`- req.user.userId: "${req.user.userId}"`);
    this.logger.log(`- elderlyUserId final: "${elderlyUserId}"`);
    this.logger.log(`- Nome: ${req.user.username || req.user.name}`);
    this.logger.log(`- Role: ${req.user.role}`);

    const result = await this.elderlyMedicationService.findByElderlyUserId(elderlyUserId);
    this.logger.log(`=== RESULTADO FINAL: ${result.length} medicamentos retornados ===`);
    
    return result;
  }

  @Get('active')
  @ApiOperation({ 
    summary: 'Buscar medicamentos ativos',
    description: 'Retorna apenas os medicamentos ativos do idoso logado'
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de medicamentos ativos retornada com sucesso.',
    type: [Medication],
  })
  async getActiveMedications(@Request() req): Promise<Medication[]> {
    this.logger.log('=== IDOSO BUSCANDO MEDICAMENTOS ATIVOS ===');
    
    const elderlyUserId = req.user.sub || req.user.userId;
    this.logger.log(`Idoso UserId: ${elderlyUserId}`);

    return this.elderlyMedicationService.findActiveByElderlyUserId(elderlyUserId);
  }

  @Get('today-schedule')
  @ApiOperation({ 
    summary: 'Horários de medicamentos de hoje',
    description: 'Retorna os horários de medicamentos para o dia atual'
  })
  @ApiResponse({
    status: 200,
    description: 'Horários de hoje retornados com sucesso.',
  })
  async getTodaySchedule(@Request() req): Promise<{
    medicationName: string;
    dosage: string;
    time: string;
    instructions?: string;
  }[]> {
    this.logger.log('=== IDOSO BUSCANDO HORÁRIOS DE HOJE ===');
    
    const elderlyUserId = req.user.sub || req.user.userId;
    this.logger.log(`Idoso UserId: ${elderlyUserId}`);

    return this.elderlyMedicationService.getTodayScheduleByElderlyUserId(elderlyUserId);
  }

  @Get('summary')
  @ApiOperation({ 
    summary: 'Resumo de medicamentos',
    description: 'Retorna um resumo dos medicamentos do idoso'
  })
  @ApiResponse({
    status: 200,
    description: 'Resumo retornado com sucesso.',
  })
  async getSummary(@Request() req): Promise<{
    totalMedications: number;
    activeMedications: number;
    inactiveMedications: number;
    todayDoses: number;
    nextDose?: {
      medicationName: string;
      time: string;
      dosage: string;
    };
    recentMedications: {
      name: string;
      dosage: string;
      frequency: string;
      createdAt: Date;
    }[];
  }> {
    this.logger.log('=== IDOSO BUSCANDO RESUMO ===');
    
    const elderlyUserId = req.user.sub || req.user.userId;
    this.logger.log(`Idoso UserId: ${elderlyUserId}`);

    // Buscar dados
    const [allMedications, activeMedications, todaySchedule] = await Promise.all([
      this.elderlyMedicationService.findByElderlyUserId(elderlyUserId),
      this.elderlyMedicationService.findActiveByElderlyUserId(elderlyUserId),
      this.elderlyMedicationService.getTodayScheduleByElderlyUserId(elderlyUserId),
    ]);

    // Calcular próxima dose
    const now = new Date();
    const currentTime = now.toTimeString().slice(0, 5); // HH:MM
    
    const nextDose = todaySchedule
      .filter(dose => dose.time > currentTime)
      .sort((a, b) => a.time.localeCompare(b.time))[0];

    // Medicamentos recentes (últimos 3)
    const recentMedications = allMedications
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 3)
      .map(med => ({
        name: med.name,
        dosage: med.dosage,
        frequency: med.frequency,
        createdAt: med.createdAt,
      }));

    const summary = {
      totalMedications: allMedications.length,
      activeMedications: activeMedications.length,
      inactiveMedications: allMedications.length - activeMedications.length,
      todayDoses: todaySchedule.length,
      nextDose: nextDose ? {
        medicationName: nextDose.medicationName,
        time: nextDose.time,
        dosage: nextDose.dosage,
      } : undefined,
      recentMedications,
    };

    this.logger.log(`Resumo gerado: ${JSON.stringify(summary)}`);
    return summary;
  }

  @Get('debug-medications')
  @ApiOperation({ 
    summary: 'DEBUG - Buscar medicamentos com logs detalhados',
    description: 'Endpoint especial para debug que força a busca de medicamentos'
  })
  async debugMedications(@Request() req): Promise<{
    userInfo: any;
    searchResults: any;
    allMedicationsInDatabase: any;
    forcedSearch: Medication[];
  }> {
    this.logger.log('=== 🔧 DEBUG ENDPOINT ATIVADO ===');
    
    const elderlyUserId = req.user.sub || req.user.userId;
    
    // 1. Informações do usuário
    const userInfo = {
      fullUser: req.user,
      elderlyUserId: elderlyUserId,
      username: req.user.username,
      role: req.user.role,
    };
    this.logger.log(`👤 USER INFO: ${JSON.stringify(userInfo)}`);

    // 2. Busca normal
    const normalSearch = await this.elderlyMedicationService.findByElderlyUserId(elderlyUserId);
    this.logger.log(`🔍 BUSCA NORMAL: ${normalSearch.length} medicamentos`);

    // 3. Buscar TODOS os medicamentos no banco
    const allMedications = await this.elderlyMedicationService.findAllMedicationsForDebug();
    this.logger.log(`📊 TOTAL NO BANCO: ${allMedications.length} medicamentos`);

    // 4. Busca forçada com o ID exato do banco
    const forcedSearch = await this.elderlyMedicationService.findByElderlyUserIdForced('e8d93e10-6244-4275-8a2e-9efc');
    this.logger.log(`💪 BUSCA FORÇADA: ${forcedSearch.length} medicamentos`);

    const result = {
      userInfo,
      searchResults: {
        normalSearchCount: normalSearch.length,
        normalSearchData: normalSearch,
      },
      allMedicationsInDatabase: {
        totalCount: allMedications.length,
        allData: allMedications,
      },
      forcedSearch: forcedSearch,
    };

    this.logger.log('=== 🎯 DEBUG COMPLETO ===');
    return result;
  }

  @Get('dashboard')
  @ApiOperation({ 
    summary: 'Dashboard completo do idoso',
    description: 'Retorna todas as informações necessárias para o dashboard do idoso'
  })
  @ApiResponse({
    status: 200,
    description: 'Dashboard retornado com sucesso.',
  })
  async getDashboard(@Request() req): Promise<{
    user: {
      name: string;
      role: string;
    };
    summary: any;
    activeMedications: Medication[];
    todaySchedule: any[];
  }> {
    this.logger.log('=== IDOSO ACESSANDO DASHBOARD ===');
    
    const elderlyUserId = req.user.sub || req.user.userId;
    this.logger.log(`Idoso UserId: ${elderlyUserId}`);

    // Buscar todos os dados necessários
    const [summary, activeMedications, todaySchedule] = await Promise.all([
      this.getSummary(req),
      this.getActiveMedications(req),
      this.getTodaySchedule(req),
    ]);

    const dashboard = {
      user: {
        name: req.user.username || req.user.name,
        role: req.user.role,
      },
      summary,
      activeMedications,
      todaySchedule,
    };

    this.logger.log('Dashboard gerado com sucesso');
    return dashboard;
  }
}
