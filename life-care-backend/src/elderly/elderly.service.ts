import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, UserRole } from '../users/entities/user.entity';
import { CreateElderlyDto } from './dto/create-elderly.dto';
import { UpdateElderlyDto } from './dto/update-elderly.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ElderlyService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async registerElderly(createElderlyDto: CreateElderlyDto, caregiverId: string) {
    // Gerar PIN único de 6 dígitos
    const pin = this.generatePin();
    const hashedPin = await bcrypt.hash(pin, 10);

    // Calcular idade a partir da data de nascimento
    const age = this.calculateAge(createElderlyDto.birthDate);

    // Na nova arquitetura, criar diretamente na User entity
    const elderlyUser = this.userRepository.create({
      name: createElderlyDto.name,
      email: `elderly_${pin}@completocare.local`,
      password: hashedPin,
      role: UserRole.PATIENT,
      pin: pin,
      age: age,
      medicalCondition: createElderlyDto.medicalInfo,
      emergencyContact: createElderlyDto.contactInfo,
      emergencyPhone: createElderlyDto.contactInfo,
      address: createElderlyDto.contactInfo,
      notes: createElderlyDto.medicalInfo,
    });

    const savedUser = await this.userRepository.save(elderlyUser);

    console.log(`Idoso ${savedUser.id} cadastrado com sucesso na nova arquitetura.`);

    return {
      message: 'Idoso cadastrado com sucesso',
      pin: pin,
      elderlyId: savedUser.id,
    };
  }

  async findAllByCaregiver(caregiverId: string): Promise<any[]> {
    // Simplificado - buscar todos os usuários PATIENT
    const patients = await this.userRepository.find({
      where: { role: UserRole.PATIENT },
      select: ['id', 'name', 'email', 'pin', 'age', 'medicalCondition', 'emergencyContact', 'createdAt']
    });

    return patients.map(patient => ({
      id: patient.id,
      name: patient.name,
      email: patient.email,
      pin: patient.pin,
      age: patient.age,
      medicalCondition: patient.medicalCondition,
      emergencyContact: patient.emergencyContact,
      createdAt: patient.createdAt,
    }));
  }

  async findOne(id: string, caregiverId: string): Promise<any> {
    const patient = await this.userRepository.findOne({
      where: { id, role: UserRole.PATIENT },
    });

    if (!patient) {
      throw new NotFoundException(`Idoso com ID ${id} não encontrado`);
    }

    return {
      id: patient.id,
      name: patient.name,
      email: patient.email,
      pin: patient.pin,
      age: patient.age,
      medicalCondition: patient.medicalCondition,
      emergencyContact: patient.emergencyContact,
      emergencyPhone: patient.emergencyPhone,
      address: patient.address,
      notes: patient.notes,
      createdAt: patient.createdAt,
    };
  }

  async update(id: string, updateElderlyDto: UpdateElderlyDto, caregiverId: string) {
    const patient = await this.userRepository.findOne({
      where: { id, role: UserRole.PATIENT },
    });

    if (!patient) {
      throw new NotFoundException(`Idoso com ID ${id} não encontrado`);
    }

    // Atualizar campos
    if (updateElderlyDto.name) {
      patient.name = updateElderlyDto.name;
    }

    if (updateElderlyDto.medicalInfo) {
      patient.medicalCondition = updateElderlyDto.medicalInfo;
      patient.notes = updateElderlyDto.medicalInfo;
    }

    if (updateElderlyDto.contactInfo) {
      patient.emergencyContact = updateElderlyDto.contactInfo;
      patient.emergencyPhone = updateElderlyDto.contactInfo;
      patient.address = updateElderlyDto.contactInfo;
    }

    const savedPatient = await this.userRepository.save(patient);

    return {
      message: 'Idoso atualizado com sucesso',
      elderly: savedPatient,
    };
  }

  async remove(id: string, caregiverId: string): Promise<void> {
    const patient = await this.userRepository.findOne({
      where: { id, role: UserRole.PATIENT },
    });

    if (!patient) {
      throw new NotFoundException(`Idoso com ID ${id} não encontrado`);
    }

    await this.userRepository.remove(patient);
  }

  async loginWithPin(pin: string) {
    console.log('=== LOGIN DO IDOSO ===');
    console.log('PIN recebido:', pin);
    console.log('Tipo do PIN:', typeof pin);
    
    // Verificar todos os usuários PATIENT no banco
    const allPatients = await this.userRepository.find({
      where: { role: UserRole.PATIENT },
      select: ['id', 'name', 'pin', 'isActive']
    });
    
    console.log('Todos os pacientes no banco:');
    allPatients.forEach((patient, index) => {
      console.log(`${index + 1}. ID: ${patient.id}, Nome: ${patient.name}, PIN: ${patient.pin}, Ativo: ${patient.isActive}`);
    });
    
    const user = await this.userRepository.findOne({
      where: { pin, role: UserRole.PATIENT },
    });

    console.log('Usuário encontrado para PIN', pin, ':', user ? { id: user.id, name: user.name, pin: user.pin, isActive: user.isActive } : 'NENHUM');

    if (!user) {
      console.log('❌ PIN não encontrado no banco de dados');
      throw new BadRequestException('PIN inválido');
    }

    if (!user.isActive) {
      console.log('❌ Usuário inativo');
      throw new BadRequestException('Usuário inativo');
    }

    console.log('✅ Login bem-sucedido para:', { id: user.id, name: user.name, role: user.role, pin: user.pin });

    const payload = { 
      sub: user.id, 
      username: user.name, 
      role: user.role,
      userId: user.id
    };
    const token = this.jwtService.sign(payload);

    console.log('Token JWT gerado para:', payload);

    return {
      user: {
        id: user.id,
        name: user.name,
        role: user.role,
      },
      access_token: token,
    };
  }

  private generatePin(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  private calculateAge(birthDate: string): number {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    
    return age;
  }
}
