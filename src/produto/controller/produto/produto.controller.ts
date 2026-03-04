import { Body, Controller, Delete, Get, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ProdutoService } from 'src/produto/services/produto/produto.service';

@Controller('produto')
export class ProdutoController {
    constructor(private produtoService: ProdutoService){}


    @Get()
    getProdutos(){
        return this.produtoService.fetchProdutos()
    }
    @Post()
    createProduto(@Body() produtoData){
        return this.produtoService.createProduto(produtoData)
    }

    @Delete()
    deleteProduto(@Query('id',ParseIntPipe) id:number ){
        return this.produtoService.deleteProduto(id)
    }
}
