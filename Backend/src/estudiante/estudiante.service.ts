import { Injectable } from '@nestjs/common';
import { Estudiante } from './estudiante.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';




@Injectable()
export class EstudianteService {

  constructor(@InjectRepository(Estudiante) private estudianteRepository: Repository<Estudiante>){
    
  }

  insertEstudiante(estudiante: Estudiante) {
    this.estudianteRepository.save(estudiante)
    return estudiante.documento;
  }

  getEstudiantes() {
    return this.estudianteRepository.find();
  }

  getEstudiante(documento: number) {
    return this.estudianteRepository.findOneBy({documento});
  }

  async updateEstudiante(estudiante: Estudiante, documento: number) {
    const estudianteEncontrado = await this.estudianteRepository.findOneBy({documento});
    estudiante.nombre_completo ? estudianteEncontrado.nombre_completo = estudiante.nombre_completo : estudianteEncontrado.nombre_completo =  estudianteEncontrado.nombre_completo 
    estudiante.telefono_fijo ? estudianteEncontrado.telefono_fijo = estudiante.telefono_fijo : estudianteEncontrado.telefono_fijo =  estudianteEncontrado.telefono_fijo 
    estudiante.celular ? estudianteEncontrado.celular = estudiante.celular : estudianteEncontrado.celular =  estudianteEncontrado.celular 
    estudiante.correo_estudiantil ? estudianteEncontrado.correo_estudiantil = estudiante.correo_estudiantil : estudianteEncontrado.correo_estudiantil =  estudianteEncontrado.correo_estudiantil 
    estudiante.correo_personal ? estudianteEncontrado.correo_personal = estudiante.correo_personal : estudianteEncontrado.correo_personal =  estudianteEncontrado.correo_personal 
    estudiante.codigo_plan ? estudianteEncontrado.codigo_plan = estudiante.codigo_plan : estudianteEncontrado.codigo_plan =  estudianteEncontrado.codigo_plan 
    await this.estudianteRepository.save(estudianteEncontrado)
    return {message: 'UPDATE CORRECTLY'}
  }


  deleteEstudiante(documento: number){
    this.estudianteRepository.delete({documento})
  }
}

