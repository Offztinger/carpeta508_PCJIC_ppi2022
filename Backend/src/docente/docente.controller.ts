import { DocenteService } from './docente.service';
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
import { Docente } from './docente.entity';
import { response } from 'express';

/**
 * Este es el controlador para la entidad docente, requiere de un
 */

@Controller('docente')
export class DocenteController {
  constructor(private readonly docenteService: DocenteService) {}

  @Post()
  insertDocente(@Res()response, @Body() docente: Docente) {
    try {
      this.docenteService.insertDocente(docente);
      return docente.documento;
    } catch (error) {
      return response.status(HttpStatus.NOT_FOUND).send("Ups! Algo salió mal.");
    }
  }

  @Get()
  getAllDocentes() {
    return this.docenteService.getDocentes();
  }

  @Get(':documento')
  getDocente(@Param('documento') documento: number) {
    return this.docenteService.getDocente(documento);
  }

  @Put(':documento')
  updateDocente(
    @Param('documento') documento: number,
    @Body() docente: Docente,
  ) {
    return this.docenteService.updateDocente(docente, documento);
  }

  @Delete(':documento')
  deleteDocente(@Param('documento') documento: number) {
    this.docenteService.deleteDocente(documento);
  }
}
