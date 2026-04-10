import { Module } from '@nestjs/common';
import { EnderecoService } from './services/endereco/endereco.service';
import { EnderecoController } from './controller/endereco/endereco.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
    controllers: [EnderecoController],
    providers: [EnderecoService, PrismaService]
})
export class EnderecoModule {}
