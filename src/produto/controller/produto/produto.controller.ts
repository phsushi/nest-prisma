import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProdutoDto } from 'src/produto/ProdutoDto';
import { ProdutoService } from 'src/produto/services/produto/produto.service';
import { UpdateProdutoDto } from 'src/produto/UpdateProdutoDto';


@Controller('produto')
export class ProdutoController {
    constructor(private produtoService: ProdutoService){}


    @Get()
    async getProdutos(){
        return await this.produtoService.fetchProdutos()
    }
    @Post('create')
    @UsePipes(new ValidationPipe)
    async createProduto(@Body() produtoData:ProdutoDto){
        return await this.produtoService.createProduto(produtoData);
    }

    @Delete('delete/:id')
    async deleteProduto(@Param('id',ParseIntPipe) id:number ){
        return await this.produtoService.deleteProduto(id);
    }

    @Put('update/:id')
    @UsePipes(new ValidationPipe)
    async alterarProduto(@Param('id', ParseIntPipe) id: number, @Body() updateProdutoData: UpdateProdutoDto){
        return await this.produtoService.updateProduto(updateProdutoData, id);
    }
}
