import { ConflictException, HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from 'src/users/userDto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService){}

    async fetchAllUsers(){
        return await this.prisma.user.findMany();
    }
    async createUser(data: UserDto){
        const userAlreadyExists = await this.prisma.user.findUnique({where: {email:data.email}})

        if(userAlreadyExists){
            throw new ConflictException('Usuário já existe');
        }
        
        //Hashando a senha 
        const hashedPass = await bcrypt.hash(data.password, 10)

        //Retirando a senha desprotegida dos dados recebidos
        const {password, ...userData} = data

        //Criando o usuário passando a senha hashada
        const user = await this.prisma.user.create({
            data:{
                ...userData,
                password: hashedPass
            }
        })

        //Retornando o usuário criado, tirando a senha
        const {password:_, ...result} = user
        return result
    }
    async deleteUser(id:number){
        
        
        const userAlreadyExists = await this.prisma.user.findUnique({where: {idUser:id}})

        if(userAlreadyExists){
            return await this.prisma.user.delete({where: {idUser:id}})
        }
        throw new ConflictException('Usuário não existe');
    }

    // Auth methods //
    
    async findOne(email: UserDto["email"]){
        return await this.prisma.user.findUnique({where: {email}})
    }
}
