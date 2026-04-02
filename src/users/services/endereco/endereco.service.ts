import { ConflictException, ForbiddenException, Injectable } from '@nestjs/common';

import { EnderecoDto } from 'src/auth/enderecoDto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EnderecoService {
    constructor(private prismaService: PrismaService){}

    // Auth methods //
    async createAddress(email:string, endereco: EnderecoDto){

        const userExists = await this.prismaService.usuario.findUnique({where:{email}});

        if(!userExists){
            throw new ConflictException('Usuário não existe');
        }

        const usuarioId = userExists.id;

        //Max 2 endereos por usuário/vendedor
        const enderecosCadastradosDoUsuario = await this.prismaService.endereco.findMany({where:{usuarioId}})
        
        console.log(enderecosCadastradosDoUsuario.length);

        if(enderecosCadastradosDoUsuario.length > 2){
            throw new ForbiddenException('Limite de endereços cadastrado já atingido')
        }
        
        const dataEndereco = {...endereco, usuarioId}
        return this.prismaService.endereco.create({data: dataEndereco})
    }
    async deleteAddress(email:string, idEndereco:number){
        const result = await this.prismaService.endereco.deleteMany({
            where: {
                id: idEndereco,
                usuario: {
                    email: email, // Filtra pelo email do dono através do relacionamento
                },
            },
        });

        // O deleteMany retorna um objeto { count: number }
        if (result.count === 0) {
            throw new ForbiddenException('Você não tem permissão para deletar este endereço ou ele não existe.');
        }

        return result;

    }
}
