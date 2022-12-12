import { EstudianteService } from './estudiante.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Estudiante } from './estudiante.entity';
import { response } from 'express';

/**
 * Este es el controlador para la entidad estudiante, requiere de un
 */

@Controller('estudiante')
export class EstudianteController {
  constructor(private readonly estudianteService: EstudianteService) {}

  @Post()
  insertEstudiante(@Res()response, @Body() estudiante: Estudiante) {
    try {
      this.estudianteService.insertEstudiante(estudiante);
      return estudiante.documento;
    } catch (error) {
      return response.status(HttpStatus.NOT_FOUND).send("Ups! Algo salió mal.");
    }
  }

  @Get()
  getAllEstudiantes() {
    return this.estudianteService.getEstudiantes();
  }

  @Get(':documento')
  getEstudiante(@Param('documento') documento: number) {
    return this.estudianteService.getEstudiante(documento);
  }

  @Put(':documento')
  updateEstudiante(
    @Param('documento') documento: number,
    @Body() estudiante: Estudiante,
  ) {
    return this.estudianteService.updateEstudiante(estudiante, documento);
  }

  @Delete(':documento')
  deleteEstudiante(@Param('documento') documento: number) {
    this.estudianteService.deleteEstudiante(documento);
  }
}
