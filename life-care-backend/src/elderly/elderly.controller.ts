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
import { ElderlyService } from './elderly.service';
import { CreateElderlyDto } from './dto/create-elderly.dto';
import { UpdateElderlyDto } from './dto/update-elderly.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('elderly')
@Controller('elderly')
@ApiBearerAuth('JWT-auth')
export class ElderlyController {
  constructor(private readonly elderlyService: ElderlyService) {}

  @Post('signup')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Cadastrar um novo idoso' })
  @ApiResponse({
    status: 201,
    description: 'Idoso cadastrado com sucesso.',
  })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  async signup(@Body() createElderlyDto: CreateElderlyDto, @Request() req) {
    const caregiverId = req.user.sub;
    return this.elderlyService.registerElderly(createElderlyDto, caregiverId);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Listar todos os idosos do cuidador' })
  @ApiResponse({
    status: 200,
    description: 'Lista de idosos retornada com sucesso.',
  })
  findAll(@Request() req) {
    const caregiverId = req.user.sub;
    return this.elderlyService.findAllByCaregiver(caregiverId);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Buscar um idoso pelo ID' })
  @ApiResponse({
    status: 200,
    description: 'Idoso encontrado com sucesso.',
  })
  @ApiResponse({ status: 404, description: 'Idoso não encontrado.' })
  findOne(@Param('id') id: string, @Request() req) {
    const caregiverId = req.user.sub;
    return this.elderlyService.findOne(id, caregiverId);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Atualizar dados de um idoso' })
  @ApiResponse({
    status: 200,
    description: 'Idoso atualizado com sucesso.',
  })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  @ApiResponse({ status: 404, description: 'Idoso não encontrado.' })
  update(
    @Param('id') id: string,
    @Body() updateElderlyDto: UpdateElderlyDto,
    @Request() req,
  ) {
    const caregiverId = req.user.sub;
    return this.elderlyService.update(id, updateElderlyDto, caregiverId);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Remover um idoso' })
  @ApiResponse({ status: 200, description: 'Idoso removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Idoso não encontrado.' })
  remove(@Param('id') id: string, @Request() req) {
    const caregiverId = req.user.sub;
    return this.elderlyService.remove(id, caregiverId);
  }

  @Post('login')
  @ApiOperation({ summary: 'Login do idoso com PIN' })
  @ApiResponse({
    status: 200,
    description: 'Login realizado com sucesso.',
  })
  @ApiResponse({ status: 401, description: 'PIN inválido.' })
  async loginWithPin(@Body() loginDto: { pin: string }) {
    return this.elderlyService.loginWithPin(loginDto.pin);
  }

}
