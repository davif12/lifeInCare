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
  Logger,
  BadRequestException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { ElderlyMedicationService } from '../elderly-medication.service';
import { CreateElderlyMedicationDto } from '../dto/create-elderly-medication.dto';
import { UpdateElderlyMedicationDto } from '../dto/update-elderly-medication.dto';
import { Medication } from '../entities/elderly-medication.entity';
import { UsersService } from '../../users/users.service';
import { UserRole } from '../../users/entities/user.entity';

@ApiTags('caregiver-medications')
@Controller('caregiver/medications')
@ApiBearerAuth('JWT-auth')
export class CaregiverMedicationController {
  private readonly logger = new Logger(CaregiverMedicationController.name);

  constructor(
    private readonly elderlyMedicationService: ElderlyMedicationService,
    private readonly usersService: UsersService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ 
    summary: 'Cadastrar medicamento para idoso',
    description: 'Permite que o cuidador cadastre um novo medicamento para um idoso específico'
  })
  @ApiResponse({
    status: 201,
    description: 'Medicamento cadastrado com sucesso.',
    type: Medication,
  })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  @ApiResponse({ status: 401, description: 'Não autorizado.' })
  async create(@Body() createDto: CreateElderlyMedicationDto, @Request() req): Promise<Medication> {
    this.logger.log('=== CADASTRANDO NOVO MEDICAMENTO ===');
    
    const caregiverUserId = req.user.sub || req.user.userId;
    this.logger.log(`Cuidador: ${caregiverUserId}`);
    this.logger.log(`Idoso: ${createDto.elderlyUserId}`);
    this.logger.log(`Medicamento: ${createDto.name}`);

    // Validar se elderlyUserId é um UUID válido
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(createDto.elderlyUserId.trim())) {
      this.logger.error(`❌ elderlyUserId inválido: "${createDto.elderlyUserId}"`);
      this.logger.error('❌ Frontend está enviando nome do idoso em vez do UUID!');
      throw new BadRequestException({
        message: 'elderlyUserId deve ser um UUID válido, não o nome do idoso',
        received: createDto.elderlyUserId,
        expected: 'UUID no formato: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
        hint: 'Verifique se o frontend está enviando o ID correto do idoso'
      });
    }

    return this.elderlyMedicationService.create(createDto, caregiverUserId);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ 
    summary: 'Listar todos os medicamentos do cuidador',
    description: 'Retorna todos os medicamentos cadastrados pelo cuidador logado'
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de medicamentos retornada com sucesso.',
    type: [Medication],
  })
  async findAll(@Request() req): Promise<Medication[]> {
    this.logger.log('=== BUSCANDO TODOS OS MEDICAMENTOS DO CUIDADOR ===');
    
    const caregiverUserId = req.user.sub || req.user.userId;
    this.logger.log(`Cuidador: ${caregiverUserId}`);

    return this.elderlyMedicationService.findByCaregiverUserId(caregiverUserId);
  }

  @Get('my-medications')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ 
    summary: 'Listar medicamentos cadastrados pelo cuidador (alias)',
    description: 'Retorna todos os medicamentos cadastrados pelo cuidador logado'
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de medicamentos retornada com sucesso.',
    type: [Medication],
  })
  async findMyMedications(@Request() req): Promise<Medication[]> {
    this.logger.log('=== BUSCANDO MEDICAMENTOS DO CUIDADOR ===');
    
    const caregiverUserId = req.user.sub || req.user.userId;
    this.logger.log(`Cuidador: ${caregiverUserId}`);

    return this.elderlyMedicationService.findByCaregiverUserId(caregiverUserId);
  }

  @Get('available-elderly')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ 
    summary: 'Listar idosos disponíveis para cadastro de medicamentos',
    description: 'Retorna lista de idosos que o cuidador pode cadastrar medicamentos'
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de idosos retornada com sucesso.',
  })
  async getAvailableElderly(@Request() req): Promise<{
    id: string;
    name: string;
    age?: number;
  }[]> {
    this.logger.log('=== BUSCANDO IDOSOS DISPONÍVEIS ===');
    
    const caregiverUserId = req.user.sub || req.user.userId;
    this.logger.log(`Cuidador: ${caregiverUserId}`);

    try {
      // Buscar todos os usuários com role 'patient' (idosos)
      this.logger.log('Buscando usuários com role "patient"...');
      const elderlies = await this.usersService.findByRole(UserRole.PATIENT);
      
      const availableElderlies = elderlies.map(elderly => ({
        id: elderly.id,        // UUID para enviar no elderlyUserId
        name: elderly.name,    // Nome para mostrar no frontend
        age: elderly.age
      }));

      this.logger.log(`Encontrados ${availableElderlies.length} idosos disponíveis`);
      this.logger.log('Idosos encontrados:', availableElderlies.map(e => `${e.name} (${e.id})`));
      
      return availableElderlies;
    } catch (error) {
      this.logger.error('Erro ao buscar idosos disponíveis:', error.message);
      throw new BadRequestException({
        message: 'Erro ao buscar idosos disponíveis',
        error: error.message
      });
    }
  }

  @Get('elderly/:elderlyUserId')
  @ApiOperation({ 
    summary: 'Listar medicamentos de um idoso específico',
    description: 'Retorna todos os medicamentos de um idoso (apenas para o cuidador que os cadastrou)'
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de medicamentos do idoso retornada com sucesso.',
    type: [Medication],
  })
  async findByElderlyUserId(@Param('elderlyUserId') elderlyUserId: string): Promise<Medication[]> {
    this.logger.log('=== BUSCANDO MEDICAMENTOS DE IDOSO ESPECÍFICO ===');
    this.logger.log(`Idoso: ${elderlyUserId}`);

    return this.elderlyMedicationService.findByElderlyUserId(elderlyUserId);
  }

  @Get('test')
  @ApiOperation({ summary: 'Teste da nova arquitetura' })
  async test(): Promise<{ message: string; timestamp: string }> {
    this.logger.log('=== TESTE DA NOVA ARQUITETURA ===');
    return {
      message: 'Nova arquitetura de medicamentos funcionando!',
      timestamp: new Date().toISOString(),
    };
  }

  @Get('stats')
  @ApiOperation({ 
    summary: 'Estatísticas de medicamentos do cuidador',
    description: 'Retorna estatísticas dos medicamentos cadastrados pelo cuidador'
  })
  @ApiResponse({
    status: 200,
    description: 'Estatísticas retornadas com sucesso.',
  })
  async getStats(@Request() req): Promise<{
    total: number;
    active: number;
    inactive: number;
    elderlyCount: number;
  }> {
    this.logger.log('=== BUSCANDO ESTATÍSTICAS DO CUIDADOR ===');
    
    const caregiverUserId = req.user.sub || req.user.userId;
    this.logger.log(`Cuidador: ${caregiverUserId}`);

    return this.elderlyMedicationService.getStatsByCaregiverUserId(caregiverUserId);
  }

  @Get(':id')
  @ApiOperation({ 
    summary: 'Buscar medicamento específico',
    description: 'Retorna detalhes de um medicamento específico'
  })
  @ApiResponse({
    status: 200,
    description: 'Medicamento encontrado com sucesso.',
    type: Medication,
  })
  @ApiResponse({ status: 404, description: 'Medicamento não encontrado.' })
  async findOne(@Param('id') id: string): Promise<Medication> {
    this.logger.log(`=== BUSCANDO MEDICAMENTO ${id} ===`);
    return this.elderlyMedicationService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ 
    summary: 'Atualizar medicamento',
    description: 'Permite que o cuidador atualize um medicamento que ele cadastrou'
  })
  @ApiResponse({
    status: 200,
    description: 'Medicamento atualizado com sucesso.',
    type: Medication,
  })
  @ApiResponse({ status: 403, description: 'Sem permissão para atualizar este medicamento.' })
  @ApiResponse({ status: 404, description: 'Medicamento não encontrado.' })
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateElderlyMedicationDto,
    @Request() req
  ): Promise<Medication> {
    this.logger.log(`=== ATUALIZANDO MEDICAMENTO ${id} ===`);
    
    const caregiverUserId = req.user.sub || req.user.userId;
    this.logger.log(`Cuidador: ${caregiverUserId}`);

    return this.elderlyMedicationService.update(id, updateDto, caregiverUserId);
  }

  @Patch(':id/deactivate')
  @ApiOperation({ 
    summary: 'Desativar medicamento',
    description: 'Desativa um medicamento (soft delete)'
  })
  @ApiResponse({
    status: 200,
    description: 'Medicamento desativado com sucesso.',
    type: Medication,
  })
  @ApiResponse({ status: 403, description: 'Sem permissão para desativar este medicamento.' })
  @ApiResponse({ status: 404, description: 'Medicamento não encontrado.' })
  async deactivate(@Param('id') id: string, @Request() req): Promise<Medication> {
    this.logger.log(`=== DESATIVANDO MEDICAMENTO ${id} ===`);
    
    const caregiverUserId = req.user.sub || req.user.userId;
    this.logger.log(`Cuidador: ${caregiverUserId}`);

    return this.elderlyMedicationService.deactivate(id, caregiverUserId);
  }

  @Delete(':id')
  @ApiOperation({ 
    summary: 'Remover medicamento',
    description: 'Remove permanentemente um medicamento'
  })
  @ApiResponse({
    status: 200,
    description: 'Medicamento removido com sucesso.',
  })
  @ApiResponse({ status: 403, description: 'Sem permissão para remover este medicamento.' })
  @ApiResponse({ status: 404, description: 'Medicamento não encontrado.' })
  async remove(@Param('id') id: string, @Request() req): Promise<{ message: string }> {
    this.logger.log(`=== REMOVENDO MEDICAMENTO ${id} ===`);
    
    const caregiverUserId = req.user.sub || req.user.userId;
    this.logger.log(`Cuidador: ${caregiverUserId}`);

    await this.elderlyMedicationService.remove(id, caregiverUserId);
    return { message: 'Medicamento removido com sucesso' };
  }
}
