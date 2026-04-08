import { ConflictException, Injectable } from '@nestjs/common';
import { VendedorNovoDto } from 'src/common/Dto/vendedorNovoDto';
import { Role } from 'src/generated/prisma/enums';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt'

@Injectable()
export class VendedorService {
    constructor(private prismaService: PrismaService){}

    async createNovoVendedor(vendedorData: VendedorNovoDto){

        const vendedorAlreadyExists = await this.prismaService.usuario.findUnique({where:{cpf:vendedorData.cpf}}) 

        if(vendedorAlreadyExists){
            throw new ConflictException('Vendedor já existe');
        }

        const hashedPass = await bcrypt.hash(vendedorData.senha, 10)

        const {senha, ...vendedorInfo} = vendedorData

        const vendedorCriado = await this.prismaService.usuario.create({
            data:{
                ...vendedorInfo,
                senha: hashedPass,
                role: Role.VENDEDOR
            }
        })

        const {senha:_, ...result} = vendedorCriado
        return result
    }
}
