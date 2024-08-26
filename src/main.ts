/* eslint-disable */

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';

dotenv.config(); // Carica il file .env manualmente

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Abilita CORS
  app.enableCors({
    origin: 'http://localhost:8080', // Specifica l'origine autorizzata
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Consente di inviare cookie insieme alla richiesta
  });

  await app.listen(3000);
}
bootstrap();
