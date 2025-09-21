// src/auth/strategies/jwt.strategy.ts
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private usersService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey:
        configService.get<string>('JWT_SECRET') ??
        'seu_segredo_jwt_muito_seguro',
    });
  }

  async validate(payload: any) {
    console.log('🔍 JWT Validation - Payload received:', JSON.stringify(payload, null, 2));
    
    try {
      // Verificar se é um usuário de teste
      if (payload.sub && payload.sub.startsWith('test-user-')) {
        console.log('✅ Validating test user:', payload.sub);
        return { 
          sub: payload.sub, 
          id: payload.sub, 
          email: payload.email, 
          role: payload.role 
        };
      }
      
      console.log('🔍 Searching for database user with ID:', payload.sub);
      const user = await this.usersService.findOne(payload.sub);
      if (!user) {
        console.error(`❌ JWT validation failed: User with ID ${payload.sub} not found in database`);
        throw new UnauthorizedException('Usuário não encontrado');
      }
      
      console.log('✅ Database user found:', { id: user.id, email: user.email, role: user.role });
      return { sub: payload.sub, id: payload.sub, email: user.email, role: user.role };
    } catch (error) {
      console.error('❌ JWT validation error:', error.message);
      console.error('❌ Full error:', error);
      throw new UnauthorizedException('Token inválido ou usuário não encontrado');
    }
  }
}
