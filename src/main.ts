import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    //limpa os dados que nao sao esperados na request
    whitelist: true,
    // não faz um novo registro, caso os dados não estejam de acordo com o DTO
    forbidNonWhitelisted: true,
    // faz a tipagem automatica dos services de acordo com o DTO
    transform: true
  }))
  
  await app.listen(3000);
}
bootstrap();
