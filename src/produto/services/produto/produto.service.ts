import { Injectable, NotFoundException } from '@nestjs/common';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProdutoService {
    constructor(private prismaService: PrismaService){}

    //metodo de querry/exibição do catalogo
    fetchProdutos(){
        return this.prismaService.produto.findMany();
    }
    //metodo de criação de produto
    async createProduto(data){
        const produtoExists = await this.prismaService.produto.findFirst({where: {idProduto: data.id}})

        if (produtoExists){
            throw new ExceptionsHandler
        }
        return await this.prismaService.produto.create(data)
    }
    async deleteProduto(id){
        const produtoExists = await this.prismaService.produto.findFirst({where: {idProduto: id}})

        if (!produtoExists){
            throw new NotFoundException('Produto não encontrado');
        }
        return await this.prismaService.produto.delete({where:{idProduto:id}})
    }
}
