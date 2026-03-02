import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './services/auth.service'
import { UsersService } from 'src/users/services/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports:  [UsersModule],
  controllers: [AuthController],
  providers: [AuthService, UsersService, PrismaService]
})
export class AuthModule {}
