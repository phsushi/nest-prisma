import { Module } from '@nestjs/common';
import { ProdutoService } from './services/produto/produto.service';
import { ProdutoController } from './controller/produto/produto.controller';

@Module({
  providers: [ProdutoService],
  controllers: [ProdutoController]
})
export class ProdutoModule {}
