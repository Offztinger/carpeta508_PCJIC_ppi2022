import { EstudianteService } from './estudiante.service';
import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';

@Controller('estudiante')
export class EstudianteController {
  constructor(private readonly estudianteService: EstudianteService) {}

  //   @Get()
  //   getEstudiante() {
  //     return 'Hello';
  //   }

  @Post()
  insertEstudiante(
    @Body('documento') documento: number,
    @Body('nombre_completo') nombre_completo: string,
    @Body('telefono_fijo') telefono_fijo: number,
    @Body('celular') celular: number,
    @Body('correo_estudiantil') correo_estudiantil: string,
    @Body('correo_personal') correo_personal: string,
    @Body('codigo_plan') codigo_plan: number,
  ) {
    this.estudianteService.insertEstudiante(
      documento,
      nombre_completo,
      telefono_fijo,
      celular,
      correo_estudiantil,
      correo_personal,
      codigo_plan,
    );
    return documento;
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
    @Body('nombre_completo') nombre_completo: string,
    @Body('telefono_fijo') telefono_fijo: number,
    @Body('celular') celular: number,
    @Body('correo_estudiantil') correo_estudiantil: string,
    @Body('correo_personal') correo_personal: string,
    @Body('codigo_plan') codigo_plan: number,
  ) {
    return this.estudianteService.updateEstudiante(
      documento,
      nombre_completo,
      telefono_fijo,
      celular,
      correo_estudiantil,
      correo_personal,
      codigo_plan
    );
  }

  @Delete(':documento')
  deleteEstudiante(@Param('documento') documento: number){
    this.estudianteService.deleteEstudiante(documento);
  }
}
