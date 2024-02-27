import { EquipoService } from './equipo.service';
import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { Equipo } from './equipo.entity';

/**
 * Este es el controlador para la entidad equipo, requiere de un 
 */

@Controller('equipo')
export class EquipoController {
  constructor(private readonly equipoService: EquipoService) {}

  @Post()
  insertEquipo(
    @Body() equipo: Equipo,
  ) {
    this.equipoService.insertEquipo(equipo);
    return equipo.id;
  }

  @Get()
  getAllEquipos() {
    return this.equipoService.getEquipos();
  }

  @Get(':id')
  getEquipo(@Param('id') id: number) {
    return this.equipoService.getEquipo(id);
  }

  @Put(':id')
  updateEquipo(
    @Param('id') id: number,
    @Body() equipo: Equipo
  ) {
    return this.equipoService.updateEquipo(equipo, id);
  }

  @Delete(':id')
  deleteEquipo(@Param('id') id: number){
    this.equipoService.deleteEquipo(id);
  }
}
