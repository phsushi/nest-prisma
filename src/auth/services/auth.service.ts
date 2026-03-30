import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { access } from 'fs';
import { UsersService } from 'src/users/services/users/users.service';
import * as bcrypt from 'bcrypt'
import { EnderecoDto } from '../enderecoDto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService, private prismaService: PrismaService){}

    async signIn(email: string, pass:string){
        
        //Verifica se o usuário existe no banco
        const user = await this.userService.findOne(email);
        if(!user){
            throw new UnauthorizedException();
        }

        //Checa se a senha está correta
        const isMatch = await bcrypt.compare(pass, user.senha);
        if(!isMatch){
            throw new UnauthorizedException();
        }
        const enderecosDoUsuario = await this.prismaService.usuario.findUnique({where:{id:user.id}, select:{
            email: true,
            nomeCompleto: true,
            telefone: true,
            enderecos: {
                select: {
                    id: false,
                    cep: true,
                    ruaAvenida: true,
                    complemento:true,
                    usuarioId: false
                }
            }
        }})
        const payload = {sub: user.id, ...enderecosDoUsuario}
        return {access_token: await this.jwtService.signAsync(payload)};
    }

}
