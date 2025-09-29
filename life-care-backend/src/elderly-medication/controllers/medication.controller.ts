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
import { CaregiverElderlyService } from '../../users/caregiver-elderly.service';

@ApiTags('medications')
@Controller('medications')
@ApiBearerAuth('JWT-auth')
export class MedicationController {
  private readonly logger = new Logger(MedicationController.name);

  constructor(
    private readonly elderlyMedicationService: ElderlyMedicationService,
    private readonly usersService: UsersService,
    private readonly caregiverElderlyService: CaregiverElderlyService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ 
    summary: 'Cadastrar medicamento',
    description: 'Permite cadastrar um novo medicamento. Funciona tanto para cuidadores quanto para idosos.'
  })
  @ApiResponse({
    status: 201,
    description: 'Medicamento cadastrado com sucesso.',
    type: Medication,
  })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  @ApiResponse({ status: 401, description: 'Não autorizado.' })
  @ApiResponse({ status: 403, description: 'Acesso negado.' })
  async create(
    @Body() createMedicationDto: CreateElderlyMedicationDto,
    @Request() req,
  ) {
    const userId = req.user.sub;
    const userRole = req.user.role;

    this.logger.log(`Usuário ${userId} (${userRole}) criando medicamento`);

    // Validar dados básicos
    if (!createMedicationDto.name || !createMedicationDto.dosage) {
      throw new BadRequestException('Nome e dosagem são obrigatórios');
    }

    // Buscar dados do usuário
    const user = await this.usersService.findOne(userId);
    if (!user) {
      throw new BadRequestException('Usuário não encontrado');
    }

    // Lógica baseada no tipo de usuário
    if (userRole === UserRole.CAREGIVER) {
      // Cuidador: precisa especificar o elderlyUserId
      if (!createMedicationDto.elderlyUserId) {
        throw new BadRequestException('elderlyUserId é obrigatório para cuidadores');
      }

      // Verificar se o idoso pertence ao cuidador
      const elderly = await this.usersService.findOne(createMedicationDto.elderlyUserId);
      if (!elderly) {
        throw new BadRequestException('Idoso não encontrado');
      }

      // Verificar relacionamento cuidador-idoso
      const hasRelationship = await this.caregiverElderlyService.hasRelationship(userId, createMedicationDto.elderlyUserId);
      if (!hasRelationship) {
        throw new BadRequestException('Idoso não pertence a este cuidador');
      }

      return this.elderlyMedicationService.create(createMedicationDto, userId);

    } else if (userRole === UserRole.PATIENT) {
      // Idoso: medicamento é para ele mesmo
      // Buscar o cuidador associado
      const caregivers = await this.caregiverElderlyService.getCaregiversByElderlyUserId(userId);
      if (!caregivers || caregivers.length === 0) {
        throw new BadRequestException('Idoso não possui cuidador associado');
      }

      return this.elderlyMedicationService.create({
        ...createMedicationDto,
        elderlyUserId: userId,
      }, caregivers[0]); // Usar o primeiro cuidador

    } else {
      throw new BadRequestException('Tipo de usuário não suportado');
    }
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ 
    summary: 'Listar medicamentos',
    description: 'Lista medicamentos baseado no tipo de usuário'
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de medicamentos retornada com sucesso.',
    type: [Medication],
  })
  async findAll(@Request() req) {
    const userId = req.user.sub;
    const userRole = req.user.role;

    this.logger.log(`Usuário ${userId} (${userRole}) listando medicamentos`);

    if (userRole === UserRole.CAREGIVER) {
      return this.elderlyMedicationService.findByCaregiverId(userId);
    } else if (userRole === UserRole.PATIENT) {
      return this.elderlyMedicationService.findByElderlyId(userId);
    } else {
      throw new BadRequestException('Tipo de usuário não suportado');
    }
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ 
    summary: 'Buscar medicamento por ID',
    description: 'Retorna um medicamento específico'
  })
  @ApiResponse({
    status: 200,
    description: 'Medicamento encontrado.',
    type: Medication,
  })
  @ApiResponse({ status: 404, description: 'Medicamento não encontrado.' })
  async findOne(@Param('id') id: string, @Request() req) {
    const userId = req.user.sub;
    const userRole = req.user.role;

    const medication = await this.elderlyMedicationService.findOne(id);
    
    // Verificar permissões
    if (userRole === UserRole.CAREGIVER) {
      if (medication.caregiverUserId !== userId) {
        throw new BadRequestException('Acesso negado a este medicamento');
      }
    } else if (userRole === UserRole.PATIENT) {
      if (medication.elderlyUserId !== userId) {
        throw new BadRequestException('Acesso negado a este medicamento');
      }
    }

    return medication;
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ 
    summary: 'Atualizar medicamento',
    description: 'Atualiza um medicamento existente'
  })
  @ApiResponse({
    status: 200,
    description: 'Medicamento atualizado com sucesso.',
    type: Medication,
  })
  async update(
    @Param('id') id: string,
    @Body() updateMedicationDto: UpdateElderlyMedicationDto,
    @Request() req,
  ) {
    const userId = req.user.sub;
    const userRole = req.user.role;

    // Verificar se o medicamento existe e se o usuário tem permissão
    const medication = await this.elderlyMedicationService.findOne(id);
    
    if (userRole === UserRole.CAREGIVER) {
      if (medication.caregiverUserId !== userId) {
        throw new BadRequestException('Acesso negado a este medicamento');
      }
    } else if (userRole === UserRole.PATIENT) {
      if (medication.elderlyUserId !== userId) {
        throw new BadRequestException('Acesso negado a este medicamento');
      }
    }

    return this.elderlyMedicationService.update(id, updateMedicationDto, userId);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ 
    summary: 'Remover medicamento',
    description: 'Remove um medicamento existente'
  })
  @ApiResponse({
    status: 200,
    description: 'Medicamento removido com sucesso.',
  })
  async remove(@Param('id') id: string, @Request() req) {
    const userId = req.user.sub;
    const userRole = req.user.role;

    // Verificar se o medicamento existe e se o usuário tem permissão
    const medication = await this.elderlyMedicationService.findOne(id);
    
    if (userRole === UserRole.CAREGIVER) {
      if (medication.caregiverUserId !== userId) {
        throw new BadRequestException('Acesso negado a este medicamento');
      }
    } else if (userRole === UserRole.PATIENT) {
      if (medication.elderlyUserId !== userId) {
        throw new BadRequestException('Acesso negado a este medicamento');
      }
    }

    return this.elderlyMedicationService.remove(id, userId);
  }
}
