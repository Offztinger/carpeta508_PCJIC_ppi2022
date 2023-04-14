import { AsesorService } from './asesor.service';
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
import { Asesor } from './asesor.entity';
import { response } from 'express';

/**
 * Este es el controlador para la entidad asesor, requiere de un
 */

@Controller('asesor')
export class AsesorController {
  constructor(private readonly asesorService: AsesorService) {}

  @Post()
  insertAsesor(@Res()response, @Body() asesor: Asesor) {
    try {
      this.asesorService.insertAsesor(asesor);
      return asesor.documento;
    } catch (error) {
      return response.status(HttpStatus.NOT_FOUND).send("Ups! Algo salió mal.");
    }
  }

  @Get()
  getAllAsesors() {
    return this.asesorService.getAsesors();
  }

  @Get(':documento')
  getAsesor(@Param('documento') documento: number) {
    return this.asesorService.getAsesor(documento);
  }

  @Put(':documento')
  updateAsesor(
    @Param('documento') documento: number,
    @Body() asesor: Asesor,
  ) {
    return this.asesorService.updateAsesor(asesor, documento);
  }

  @Delete(':documento')
  deleteAsesor(@Param('documento') documento: number) {
    this.asesorService.deleteAsesor(documento);
  }
}
