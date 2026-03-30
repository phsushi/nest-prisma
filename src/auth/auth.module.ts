import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './services/auth.service'
import { UsersService } from 'src/users/services/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { EnderecoService } from 'src/users/services/endereco/endereco.service';

@Module({
  imports:  [UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: {expiresIn:'10M'}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService, PrismaService, EnderecoService]
})
export class AuthModule {}
