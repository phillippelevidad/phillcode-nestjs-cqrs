import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { existsSync, unlinkSync } from 'fs';
import { AppService } from './app.service';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const dbFile = 'db.sqlite';
  if (existsSync(dbFile)) unlinkSync(dbFile);

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const appService = app.get(AppService);
  await appService.seed();

  await app.listen(3000);
}
bootstrap();
