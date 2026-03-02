import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProdutoModule } from './produto/produto.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [UsersModule, ProdutoModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
