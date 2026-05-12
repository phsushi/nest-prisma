import { ConflictException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CategoriaDto } from 'src/common/Dto/categoriaDto';
import { UpdateCategoriaDto } from 'src/common/Dto/updateCategoriaDto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class CategoriaService{
    constructor(private prismaService: PrismaService){}

    async createCategoria(categoriaData: CategoriaDto) {
        const categoryAlreadyExists = await this.prismaService.categoria.findUnique({where:{nome: categoriaData.nome}})
        if(categoryAlreadyExists){
            throw new ConflictException("Categoria já existe");
        }
        return await this.prismaService.categoria.create({data: categoriaData})
    }
    async fetchAll() {
        return await this.prismaService.categoria.findMany();
    }
    async deleteCategoria(id:number) {
        const categoryExists = await this.prismaService.categoria.findUnique({where:{id}})
        if(!categoryExists){
            throw new NotFoundException("Categoria não encontrada");
        }
        return await this.prismaService.categoria.delete({where:{id}})

    }
    async updateCategoria(id:number, updateCategoriaData: UpdateCategoriaDto) {
        const categoryExists = await this.prismaService.categoria.findUnique({where:{id}})
        if(!categoryExists){
            throw new NotFoundException("Categoria não encontrada");
        }
        return await this.prismaService.categoria.update({data:updateCategoriaData, where:{id}})
        
    }
    
}
