import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService, ConfigType } from '@nestjs/config';
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
import configurations, { configRoot } from './core/config/configurations';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true 
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forRoot(configRoot())],
      inject: [configurations.KEY],
      useFactory: async (configEnvs: ConfigType<typeof configurations>) => {
        return {
          type: 'postgres',
          host: configEnvs.postgresHost,
          port: configEnvs.postgresPort,
          username: configEnvs.postgresUser,
          password: configEnvs.postgresPassword,
          database: configEnvs.postgresDatabase,
          synchronize: true,
        };
      },
    }),
    EstudianteModule, EquipoModule, DocenteModule, AsesorModule, CronogramaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
