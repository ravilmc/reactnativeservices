import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 4000;
  const host = process.env.HOST || 'localhost';
  await app.listen(port);
  console.log(`Application is running on: http://${host}:${port}`);
}
bootstrap();
