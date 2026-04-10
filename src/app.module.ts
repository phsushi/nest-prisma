import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProdutoModule } from './produto/produto.module';
import { AuthModule } from './auth/auth.module';
import { EnderecoModule } from './endereco/endereco.module';


@Module({
  imports: [UsersModule, ProdutoModule, AuthModule, EnderecoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
