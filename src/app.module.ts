import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProdutoModule } from './produto/produto.module';


@Module({
  imports: [UsersModule, ProdutoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
