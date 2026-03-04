import { Controller, Get } from '@nestjs/common';
import { ProdutoService } from 'src/produto/services/produto/produto.service';

@Controller('produto')
export class ProdutoController {
    constructor(private produtoService: ProdutoService){}


    @Get()
    getProdutos(){
        return this.produtoService
    }
}
