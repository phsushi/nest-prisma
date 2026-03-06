import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ValidationTypes } from 'class-validator';
import { ProdutoDto } from 'src/produto/ProdutoDto';
import { ProdutoService } from 'src/produto/services/produto/produto.service';
import { UpdateProdutoDto } from 'src/produto/UpdateProdutoDto';
import { UserDto } from 'src/users/userDto';

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

    @Delete('delete/:id')
    deleteProduto(@Param('id',ParseIntPipe) id:number ){
        return this.produtoService.deleteProduto(id);
    }

    @Put('update/:id')
    @UsePipes(new ValidationPipe)
    alterarProduto(@Param('id', ParseIntPipe) id: number, @Body() updateProdutoData: UpdateProdutoDto){
        return  this.produtoService.updateProduto(updateProdutoData, id);
    }
}
