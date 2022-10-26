import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SERVER_PORT } from './config/constants';
import cors from 'cors';

async function bootstrap() {
  const cors = require('cors');
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = +configService.get<number>(SERVER_PORT) || 3030;
  app.use(cors());
  await app.listen(port);
  console.log(`Listening on port ${await app.getUrl()}`);
}

bootstrap();
