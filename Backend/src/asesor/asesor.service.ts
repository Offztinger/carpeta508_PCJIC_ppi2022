import { Injectable } from '@nestjs/common';
import { Asesor } from './asesor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AsesorService {
  constructor(
    @InjectRepository(Asesor)
    private asesorRepository: Repository<Asesor>,
  ) {}

  insertAsesor(asesor: Asesor) {
    this.asesorRepository.save(asesor);
    return asesor.documento;
  }

  getAsesors() {
    return this.asesorRepository.find();
  }

  getAsesor(documento: number) {
    return this.asesorRepository.findOneBy({ documento });
  }

  async updateAsesor(asesor: Asesor, documento: number) {
    const asesorEncontrado = await this.asesorRepository.findOneBy({
      documento,
    });
    asesor.nombre_completo
      ? (asesorEncontrado.nombre_completo = asesor.nombre_completo)
      : (asesorEncontrado.nombre_completo =
          asesorEncontrado.nombre_completo);
    asesor.correo_educativo
      ? (asesorEncontrado.correo_educativo = asesor.correo_educativo)
      : (asesorEncontrado.correo_educativo =
          asesorEncontrado.correo_educativo);
    asesor.tipo_asesor
      ? (asesorEncontrado.tipo_asesor = asesor.tipo_asesor)
      : (asesorEncontrado.tipo_asesor = asesorEncontrado.tipo_asesor);
    await this.asesorRepository.save(asesorEncontrado);
    return { message: 'UPDATE CORRECTLY' };
  }

  deleteAsesor(documento: number) {
    this.asesorRepository.delete({ documento });
  }
}
