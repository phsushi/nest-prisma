import { Module } from '@nestjs/common';
import { UsersController } from './controller/users/users.controller';
import { UsersService } from './services/users/users.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { EnderecoService } from './services/endereco/endereco.service';
import { VendedorController } from './controller/vendedor/vendedor.controller';
import { VendedorService } from './services/vendedor/vendedor.service';

@Module({
  controllers: [UsersController, VendedorController],
  providers: [UsersService, PrismaService, EnderecoService, VendedorService]
})
export class UsersModule {}
