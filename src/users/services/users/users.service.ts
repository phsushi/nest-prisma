import { ConflictException, HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from 'src/users/userDto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService){}

    async fetchAllUsers(){
        return await this.prisma.usuario.findMany();
    }
    async createUser(data: UserDto){
        const userAlreadyExists = await this.prisma.usuario.findUnique({where: {email:data.email}})

        if(userAlreadyExists){
            throw new ConflictException('Usuário já existe');
        }
        
        //Hashando a senha 
        const hashedPass = await bcrypt.hash(data.senha, 10)

        //Retirando a senha desprotegida dos dados recebidos
        const {senha, ...userData} = data

        //Criando o usuário passando a senha hashada
        const user = await this.prisma.usuario.create({
            data:{
                ...userData,
                senha: hashedPass
            }
        })

        //Retornando o usuário criado, tirando a senha
        const {senha:_, ...result} = user
        return result
    }
    async deleteUser(id:number){
        
        
        const userAlreadyExists = await this.prisma.usuario.findUnique({where: {id}})

        if(userAlreadyExists){
            return await this.prisma.usuario.delete({where: {id}})
        }
        throw new ConflictException('Usuário não existe');
    }

    // Auth methods //
    
    async findOne(email: UserDto["email"]){
        return await this.prisma.usuario.findUnique({where: {email}})
    }
}
