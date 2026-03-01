import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService){}

    async fetchAllUsers(){
        return await this.prisma.user.findMany();
    }
    async createUser(data){
        return await this.prisma.user.create({data})
    }
}
