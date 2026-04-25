import { Module } from '@nestjs/common';
import { CategoriaController } from './controller/categoria.controller';
import { CategoriaService } from './service/categoria.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CategoriaController],
  providers: [CategoriaService, PrismaService]
})
export class CategoriaModule {}
