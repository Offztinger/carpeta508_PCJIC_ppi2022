import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { Estudiante } from './estudiante.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EstudianteService {
  constructor(
    @InjectRepository(Estudiante)
    private estudianteRepository: Repository<Estudiante>,
  ) { }

  getEstudiantes() {
    return this.estudianteRepository.find();
  }

  async insertEstudiante(estudiante: Estudiante) {
    const estudianteEncontrado = await this.estudianteRepository.findOneBy({
      documento: estudiante.documento,
    });

    if (estudianteEncontrado) {
      throw new BadRequestException('El estudiante ya existe');
    }

    try {
      const newStudent = await this.estudianteRepository.save(estudiante);

      if (!newStudent) {
        throw new Error('Error al crear el estudiante');
      }

      return newStudent;
    } catch (error) {
      // Manejar la excepción de la base de datos y lanzar una excepción 500 con mensaje personalizado
      throw new InternalServerErrorException('Error al crear el estudiante en la base de datos');
    }
  }



  getEstudiante(documento: number) {
    return this.estudianteRepository.findOneBy({ documento });
  }

  async updateEstudiante(estudiante: Estudiante, documento: number) {
    const estudianteEncontrado = await this.estudianteRepository.findOneBy({
      documento,
    });
    estudiante.nombre_completo
      ? (estudianteEncontrado.nombre_completo = estudiante.nombre_completo)
      : (estudianteEncontrado.nombre_completo =
        estudianteEncontrado.nombre_completo);
    estudiante.telefono_fijo
      ? (estudianteEncontrado.telefono_fijo = estudiante.telefono_fijo)
      : (estudianteEncontrado.telefono_fijo =
        estudianteEncontrado.telefono_fijo);
    estudiante.celular
      ? (estudianteEncontrado.celular = estudiante.celular)
      : (estudianteEncontrado.celular = estudianteEncontrado.celular);
    estudiante.correo_estudiantil
      ? (estudianteEncontrado.correo_estudiantil =
        estudiante.correo_estudiantil)
      : (estudianteEncontrado.correo_estudiantil =
        estudianteEncontrado.correo_estudiantil);
    estudiante.correo_personal
      ? (estudianteEncontrado.correo_personal = estudiante.correo_personal)
      : (estudianteEncontrado.correo_personal =
        estudianteEncontrado.correo_personal);
    estudiante.modulo_sol
      ? (estudianteEncontrado.modulo_sol = estudiante.modulo_sol)
      : (estudianteEncontrado.modulo_sol = estudianteEncontrado.modulo_sol);
    estudiante.codigo_plan
      ? (estudianteEncontrado.codigo_plan = estudiante.codigo_plan)
      : (estudianteEncontrado.codigo_plan = estudianteEncontrado.codigo_plan);
    await this.estudianteRepository.save(estudianteEncontrado);
    return { message: 'UPDATE CORRECTLY' };
  }

  deleteEstudiante(documento: number) {
    this.estudianteRepository.delete({ documento });
  }
}
