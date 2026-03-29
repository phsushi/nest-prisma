import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EnderecoService {
    constructor(private prismaService: PrismaService){}

    // Auth methods //

    createAddress(){
        
    }
}
