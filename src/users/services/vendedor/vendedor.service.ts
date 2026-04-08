import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VendedorService {
    constructor(private prismaService: PrismaService){}

    
}
