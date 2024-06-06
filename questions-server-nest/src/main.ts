import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.setGlobalPrefix('api'); // 全局路由前缀

  await app.listen(3333); // 监听端口 可更改
}
bootstrap();
