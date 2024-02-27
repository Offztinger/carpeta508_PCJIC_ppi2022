import { CronogramaService } from './cronograma.service';
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
import { Cronograma } from './cronograma.entity';
import { response } from 'express';

/**
 * Este es el controlador para la entidad cronograma, requiere de un
 */

@Controller('cronograma')
export class CronogramaController {
  constructor(private readonly cronogramaService: CronogramaService) {}

  @Post()
  insertCronograma(@Res()response, @Body() cronograma: Cronograma) {
    try {
      this.cronogramaService.insertCronograma(cronograma);
      return cronograma.numero_cita;
    } catch (error) {
      return response.status(HttpStatus.NOT_FOUND).send("Ups! Algo salió mal.");
    }
  }

  @Get()
  getAllCronogramas() {
    return this.cronogramaService.getCronogramas();
  }

  @Get(':numero_cita')
  getCronograma(@Param('numero_cita') numero_cita: number) {
    return this.cronogramaService.getCronograma(numero_cita);
  }

  @Put(':numero_cita')
  updateCronograma(
    @Param('numero_cita') numero_cita: number,
    @Body() cronograma: Cronograma,
  ) {
    return this.cronogramaService.updateCronograma(cronograma, numero_cita);
  }

  @Delete(':numero_cita')
  deleteCronograma(@Param('numero_cita') numero_cita: number) {
    this.cronogramaService.deleteCronograma(numero_cita);
  }
}
