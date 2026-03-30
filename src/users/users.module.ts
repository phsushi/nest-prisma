import { Module } from '@nestjs/common';
import { UsersController } from './controller/users/users.controller';
import { UsersService } from './services/users/users.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { EnderecoService } from './services/endereco/endereco.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, EnderecoService]
})
export class UsersModule {}
