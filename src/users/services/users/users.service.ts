import { ConflictException, HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from 'src/users/userDto';

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
        return await this.prisma.user.create({data})
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
