import { ConflictException, Injectable } from '@nestjs/common';
import { EnderecoDto } from 'src/auth/enderecoDto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EnderecoService {
    constructor(private prismaService: PrismaService){}

    // Auth methods //
    createAddress(email:string, endereco: EnderecoDto){
        //Max 2 endereos por usuário/vendedor
        const dataEndereco = {...endereco, email}
        return this.prismaService.endereco.create({data: dataEndereco})
    }
    async verifyUserExistence(email:string){
        const userExists = await this.prismaService.usuario.findUnique({where:{email}})

        if(!userExists){
            throw new ConflictException('Usuário não existe');
        }

        
    }
}
