import { Injectable, NotFoundException } from '@nestjs/common';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProdutoDto } from 'src/produto/ProdutoDto';

@Injectable()
export class ProdutoService {
    constructor(private prismaService: PrismaService){}

    //metodo de querry/exibição do catalogo
    async fetchProdutos(){
        return await this.prismaService.produto.findMany();
    }
    //metodo de criação de produto
    async createProduto(data){
        const produtoExists= await this.verificaProdutoExiste(data.id);

        if (produtoExists){
            throw new ExceptionsHandler
        }
        return await this.prismaService.produto.create(data)
    }
    async deleteProduto(id){
        const produtoExists= await this.verificaProdutoExiste(id);

        if (!produtoExists){
            throw new NotFoundException('Produto não encontrado');
        }
        return await this.prismaService.produto.delete({where:{idProduto:id}})
    }

    async verificaProdutoExiste(id):Promise<ProdutoDto|null>{
         
        return await this.prismaService.produto.findFirst({where: {idProduto: id}});
    }
}
