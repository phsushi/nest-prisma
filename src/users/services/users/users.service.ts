import { ConflictException, HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService){}

    async fetchAllUsers(){
        return await this.prisma.user.findMany();
    }
    async createUser(data){
        const userAlreadyExists = await this.prisma.user.findUnique({where: {email:data.email}})

        if(userAlreadyExists){
            throw new ConflictException('Usuário já existe');
        }
        return await this.prisma.user.create({data})
    }
}
