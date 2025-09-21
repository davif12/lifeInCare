import {
  Controller,
  Post,
  Request,
  Body,
  Get,
  Param,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { LoginDto } from './dto/login.dto';
import { UsersService } from '../users/users.service';
import { UserRole } from '../users/entities/user.entity';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RequestVerificationDto } from './dto/request-verification.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { PinLoginDto } from './dto/pin-login.dto';
import { RegisterPatientDto } from './dto/register-patient.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
// CaregiverService removed - using UsersService directly

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) { }

  @Public()
  @Post('login')
  @ApiOperation({ summary: 'Autenticar cuidador com email e senha' })
  @ApiResponse({ status: 200, description: 'Usuário autenticado com sucesso.' })
  @ApiResponse({ status: 401, description: 'Credenciais inválidas.' })
  async login(@Body() loginDto: LoginDto) {
    try {
      console.log('🔍 INICIANDO PROCESSO DE LOGIN PARA:', loginDto.email);
      console.log('🔍 Senha fornecida:', loginDto.password ? '[SENHA FORNECIDA]' : '[SEM SENHA]');
      console.log('🔍 Usando apenas banco de dados - usuários de teste desabilitados');

      // IR DIRETO PARA VALIDAÇÃO NO BANCO
      console.log('🔍 Validando usuário no banco de dados...');
      const user = await this.authService.validateUser(
        loginDto.email,
        loginDto.password,
      );
      
      if (!user) {
        console.log('❌ Credenciais inválidas para:', loginDto.email);
        return { statusCode: 401, message: 'Credenciais inválidas' };
      }
      
      // Verificar se o email foi confirmado
      if (user.emailVerified === false) {
        console.log('⚠️ Email não verificado para:', loginDto.email);
        return { 
          statusCode: 403, 
          message: 'Email não verificado. Use /auth/dev/verify-email para verificar automaticamente.',
          needsVerification: true,
          email: loginDto.email
        };
      }

      console.log('✅ Login bem-sucedido para usuário do banco:', loginDto.email);
      return this.authService.login(user);
      
    } catch (error) {
      console.error('❌ Erro no login:', error);
      return { statusCode: 401, message: 'Credenciais inválidas' };
    }
  }

  @Public()
  @Post('login-pin')
  @ApiOperation({ summary: 'Autenticar paciente com PIN' })
  @ApiResponse({
    status: 200,
    description: 'Paciente autenticado com sucesso.',
  })
  @ApiResponse({ status: 401, description: 'PIN inválido.' })
  async loginWithPin(@Body() pinLoginDto: PinLoginDto) {
    try {
      console.log('Tentativa de login com PIN');

      // Login de teste para desenvolvimento - PIN fixo
      if (pinLoginDto.pin === '123456') {
        console.log('Login de teste com PIN bem-sucedido');
        return {
          user: {
            id: '54321',
            name: 'Paciente Teste',
            role: 'patient',
          },
          access_token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1NDMyMSIsInJvbGUiOiJwYXRpZW50IiwiaWF0IjoxNzE2NDIyMzQ2LCJleHAiOjE3MTY1MDg3NDZ9.qwertyuiopasdfghjklzxcvbnm',
        };
      }

      return this.authService.loginWithPin(pinLoginDto.pin);
    } catch (error) {
      console.error('Erro no login com PIN:', error);
      return { statusCode: 401, message: 'PIN inválido' };
    }
  }

  @Public()
  @Post('request-verification')
  @ApiOperation({ summary: 'Solicitar verificação de email' })
  @ApiResponse({ status: 200, description: 'Token de verificação enviado.' })
  async requestVerification(@Body() requestDto: RequestVerificationDto) {
    return this.authService.sendVerificationToken(requestDto.email);
  }

  @Public()
  @Post('verify-email')
  @ApiOperation({ summary: 'Verificar email com token' })
  @ApiResponse({ status: 200, description: 'Email verificado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Token inválido ou expirado.' })
  async verifyEmail(@Body() verifyDto: VerifyEmailDto) {
    return this.authService.verifyEmail(verifyDto.email, verifyDto.token);
  }

  @Public()
  @Post('dev/verify-email')
  @ApiOperation({ summary: 'Verificar email automaticamente (desenvolvimento)' })
  @ApiResponse({ status: 200, description: 'Email verificado com sucesso.' })
  async devVerifyEmail(@Body() body: { email: string }) {
    try {
      console.log('🔧 DEV: Verificando email automaticamente:', body.email);
      
      const user = await this.usersService.findByEmail(body.email);
      
      await this.usersService.update(user.id, { 
        isEmailVerified: true,
        verificationToken: '',
        verificationTokenExpires: new Date()
      });
      
      console.log('✅ DEV: Email verificado com sucesso:', body.email);
      
      return { 
        success: true, 
        message: 'Email verificado automaticamente para desenvolvimento',
        email: body.email
      };
    } catch (error) {
      console.error('❌ DEV: Erro ao verificar email:', error.message);
      return { 
        success: false, 
        message: 'Erro: ' + error.message 
      };
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('register-patient')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Registrar um novo paciente (apenas cuidadores)' })
  @ApiResponse({ status: 201, description: 'Paciente registrado com sucesso.' })
  @ApiResponse({
    status: 403,
    description: 'Apenas cuidadores podem registrar pacientes.',
  })
  async registerPatient(
    @Request() req,
    @Body() registerPatientDto: RegisterPatientDto,
  ) {
    return this.authService.registerPatient(req.user.id, registerPatientDto);
  }

  @Get('refresh/:id')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Renovar token de acesso' })
  @ApiResponse({ status: 200, description: 'Token renovado com sucesso.' })
  @ApiResponse({ status: 401, description: 'Usuário inválido.' })
  async refreshToken(@Param('id') id: string) {
    return this.authService.refreshToken(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({ summary: 'Obter perfil do usuário autenticado' })
  @ApiResponse({ status: 200, description: 'Perfil obtido com sucesso.' })
  @ApiResponse({ status: 401, description: 'Não autorizado.' })
  async getProfile(@Request() req) {
    // req.user é adicionado pelo JwtAuthGuard
    return req.user;
  }

  @Public()
  @Post('register')
  @ApiOperation({ summary: 'Registrar um novo cuidador' })
  @ApiResponse({ status: 201, description: 'Cuidador registrado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  async register(@Body() createUserDto: CreateUserDto) {
    try {
      console.log('Tentativa de registro:', createUserDto.email);
      
      // Definir o papel como cuidador diretamente no objeto
      createUserDto.role = UserRole.CAREGIVER;
      
      // Criar o usuário
      const user = await this.usersService.create(createUserDto);
      console.log('Usuário criado com sucesso:', user.email);
      
      // Na nova arquitetura, os dados do cuidador estão na User entity
      console.log('Cuidador criado com sucesso na User entity:', user.id);
      
      const verificationResult = await this.authService.sendVerificationToken(user.email);
      console.log('Resultado do envio de verificação:', verificationResult);
      
      // Remover a senha da resposta
      const { password, ...result } = user;
      
      return {
        success: true,
        message: 'Cuidador registrado com sucesso. Verifique seu email para ativar sua conta.',
        user: result,
        verification: {
          success: verificationResult.success,
          message: verificationResult.message,
          previewUrl: verificationResult.previewUrl
        }
      };
    } catch (error) {
      console.error('Erro ao registrar cuidador:', error);
      
      // Tratamento específico para erros de validação
      if (error.response && error.response.message) {
        const messages = Array.isArray(error.response.message) 
          ? error.response.message 
          : [error.response.message];
        return { 
          success: false, 
          message: messages[0] || 'Erro de validação'
        };
      }
      
      // Tratamento para email duplicado
      if (error.code === '23505' || error.message.includes('já está em uso')) {
        return { success: false, message: 'Email já está em uso' };
      }
      
      // Erro genérico
      return { 
        success: false, 
        message: error.message || 'Erro ao registrar cuidador'
      };
    }
  }
}
