import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Asesor } from './asesor/asesor.entity';
import { AsesorModule } from './asesor/asesor.module';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from './config/constants';
import { Cronograma } from './cronograma/cronograma.entity';
import { CronogramaModule } from './cronograma/cronograma.module';
import { Docente } from './docente/docente.entity';
import { DocenteModule } from './docente/docente.module';
import { Equipo } from './equipo/equipo.entity';
import { EquipoModule } from './equipo/equipo.module';
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
        entities: [Estudiante, Equipo, Docente, Asesor, Cronograma],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    EstudianteModule, EquipoModule, DocenteModule, AsesorModule, CronogramaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
