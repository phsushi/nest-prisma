import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //enable cors
  app.enableCors();

  
  const config = new DocumentBuilder()
  .setTitle('API NestJs + Prisma')
  .setDescription('API de criação de usuário, login e criação de pedidos com produtos')
  .setVersion('1.0.1')
  .addTag('backend development')
  .build();
  
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory)

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
