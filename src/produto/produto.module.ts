import { Module } from '@nestjs/common';
import { ProdutoService } from './services/produto/produto.service';
import { ProdutoController } from './controller/produto/produto.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [ProdutoService, PrismaService],
  controllers: [ProdutoController]
})
export class ProdutoModule {}
