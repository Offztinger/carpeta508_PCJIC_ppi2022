import { Injectable } from '@nestjs/common';
import { Docente } from './docente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DocenteService {
  constructor(
    @InjectRepository(Docente)
    private docenteRepository: Repository<Docente>,
  ) {}

  insertDocente(docente: Docente) {
    this.docenteRepository.save(docente);
    return docente.documento;
  }

  getDocentes() {
    return this.docenteRepository.find();
  }

  getDocente(documento: number) {
    return this.docenteRepository.findOneBy({ documento });
  }

  async updateDocente(docente: Docente, documento: number) {
    const docenteEncontrado = await this.docenteRepository.findOneBy({
      documento,
    });
    docente.nombre_completo
      ? (docenteEncontrado.nombre_completo = docente.nombre_completo)
      : (docenteEncontrado.nombre_completo = docenteEncontrado.nombre_completo);
    docente.correo_educativo
      ? (docenteEncontrado.correo_educativo = docente.correo_educativo)
      : (docenteEncontrado.correo_educativo =
          docenteEncontrado.correo_educativo);
    docente.modulo_sol
      ? (docenteEncontrado.modulo_sol = docente.modulo_sol)
      : (docenteEncontrado.modulo_sol = docenteEncontrado.modulo_sol);
    docente.tipo_modulo
      ? (docenteEncontrado.tipo_modulo = docente.tipo_modulo)
      : (docenteEncontrado.tipo_modulo = docenteEncontrado.tipo_modulo);
    await this.docenteRepository.save(docenteEncontrado);
    return { message: 'UPDATE CORRECTLY' };
  }

  deleteDocente(documento: number) {
    this.docenteRepository.delete({ documento });
  }
}
