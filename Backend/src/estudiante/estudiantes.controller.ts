import { EstudianteService } from './estudiante.service';
import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { Estudiante } from './estudiante.entity';

@Controller('estudiante')
export class EstudianteController {
  constructor(private readonly estudianteService: EstudianteService) {}

  //   @Get()
  //   getEstudiante() {
  //     return 'Hello';
  //   }

  @Post()
  insertEstudiante(
    @Body() estudiante: Estudiante,
  ) {
    this.estudianteService.insertEstudiante(estudiante);
    return estudiante.documento;
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
    @Body() estudiante: Estudiante
  ) {
    return this.estudianteService.updateEstudiante(estudiante, documento);
  }

  @Delete(':documento')
  deleteEstudiante(@Param('documento') documento: number){
    this.estudianteService.deleteEstudiante(documento);
  }
}
