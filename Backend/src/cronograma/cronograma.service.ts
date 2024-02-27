import { Injectable } from '@nestjs/common';
import { Cronograma } from './cronograma.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CronogramaService {
  constructor(
    @InjectRepository(Cronograma)
    private cronogramaRepository: Repository<Cronograma>,
  ) {}

  insertCronograma(cronograma: Cronograma) {
    this.cronogramaRepository.save(cronograma);
    return cronograma.numero_cita;
  }

  getCronogramas() {
    return this.cronogramaRepository.find();
  }

  getCronograma(numero_cita: number) {
    return this.cronogramaRepository.findOneBy({ numero_cita });
  }

  async updateCronograma(cronograma: Cronograma, numero_cita: number) {
    const cronogramaEncontrado = await this.cronogramaRepository.findOneBy({
      numero_cita,
    });
    cronograma.titulo
      ? (cronogramaEncontrado.titulo = cronograma.titulo)
      : (cronogramaEncontrado.titulo = cronogramaEncontrado.titulo);
    cronograma.fecha
      ? (cronogramaEncontrado.fecha = cronograma.fecha)
      : (cronogramaEncontrado.fecha = cronogramaEncontrado.fecha);
    cronograma.hora_inicio
      ? (cronogramaEncontrado.hora_inicio = cronograma.hora_inicio)
      : (cronogramaEncontrado.hora_inicio = cronogramaEncontrado.hora_inicio);
    cronograma.hora_fin
      ? (cronogramaEncontrado.hora_fin = cronograma.hora_fin)
      : (cronogramaEncontrado.hora_fin = cronogramaEncontrado.hora_fin);
    cronograma.descripcion
      ? (cronogramaEncontrado.descripcion = cronograma.descripcion)
      : (cronogramaEncontrado.descripcion = cronogramaEncontrado.descripcion);
    cronograma.lugar
      ? (cronogramaEncontrado.lugar = cronograma.lugar)
      : (cronogramaEncontrado.lugar = cronogramaEncontrado.lugar);

    await this.cronogramaRepository.save(cronogramaEncontrado);
    return { message: 'UPDATE CORRECTLY' };
  }

  deleteCronograma(numero_cita: number) {
    this.cronogramaRepository.delete({ numero_cita });
  }
}
