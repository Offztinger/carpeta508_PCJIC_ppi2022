import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SERVER_PORT } from './config/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = +configService.get<number>(SERVER_PORT) || 3030;
  app.enableCors();
  await app.listen(port);
  console.log(`Listening on port ${await app.getUrl()}`);
}

bootstrap();
