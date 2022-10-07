import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from './config/constants';
import { Estudiante } from './estudiante/estudiante.entity';
import { EstudianteModule } from './estudiante/estudiante.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true 
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mariadb',
        host: configService.get<string>(DB_HOST),
        port: +configService.get<number>(DB_PORT),
        username: configService.get<string>(DB_USER),
        password: configService.get<string>(DB_PASSWORD),
        database: configService.get<string>(DB_NAME),
        entities: [Estudiante],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    EstudianteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
