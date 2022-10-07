import { Module } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { EstudianteController } from './estudiantes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.for],
  controllers: [EstudianteController],
  providers: [EstudianteService],
})
export class EstudianteModule {}
