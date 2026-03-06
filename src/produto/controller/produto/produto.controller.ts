import { Body, Controller, Delete, Get, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ValidationTypes } from 'class-validator';
import { ProdutoDto } from 'src/produto/ProdutoDto';
import { ProdutoService } from 'src/produto/services/produto/produto.service';

@Controller('produto')
export class ProdutoController {
    constructor(private produtoService: ProdutoService){}


    @Get()
    getProdutos(){
        return this.produtoService.fetchProdutos()
    }
    @Post('create')
    @UsePipes(new ValidationPipe)
    createProduto(@Body() produtoData:ProdutoDto){
        return this.produtoService.createProduto(produtoData);
    }

    @Delete()
    deleteProduto(@Query('id',ParseIntPipe) id:number ){
        return this.produtoService.deleteProduto(id);
    }
}
