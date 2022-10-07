import { Injectable } from '@nestjs/common';
import { Estudiante } from './estudiante.model';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Injectable()
export class EstudianteService {
  private estudiantes: EstudianteEntity;
  insertEstudiante(
    documento: number,
    nombre_completo: string,
    telefono_fijo: number,
    celular: number,
    correo_estudiantil: string,
    correo_personal: string,
    codigo_plan: number,
  ) {
    const newEstudiante = new Estudiante(
      documento,
      nombre_completo,
      telefono_fijo,
      celular,
      correo_estudiantil,
      correo_personal,
      codigo_plan,
    );

    this.estudiantes.(newEstudiante);
    return documento;
  }

  getEstudiantes() {
    return [...this.estudiantes];
  }

  getEstudiante(documento: number) {
    return this.getEstudiantePorDocumento(documento);
  }

  updateEstudiante(
    documento: number,
    nombre_completo: string,
    telefono_fijo: number,
    celular: number,
    correo_estudiantil: string,
    correo_personal: string,
    codigo_plan: number,
  ) {
    const [targetEstudiante, index] = this.getEstudiantePorDocumento(documento);
    //New Estudiante Param
    const nep = {
      ...targetEstudiante,
      documento,
      nombre_completo,
      telefono_fijo,
      celular,
      correo_estudiantil,
      correo_personal,
      codigo_plan,
    };
    const newEstudiante = new Estudiante(
      nep.documento,
      nep.nombre_completo,
      nep.telefono_fijo,
      nep.celular,
      nep.correo_estudiantil,
      nep.correo_personal,
      nep.codigo_plan,
    );
    this.estudiantes[index] = newEstudiante;
    return newEstudiante;
  }

  private getEstudiantePorDocumento(documento: number): [Estudiante, number] {
    const index = this.estudiantes.findIndex((e) => e.documento == documento);
    return [this.estudiantes[index], index];
  }

  deleteEstudiante(documento: number){
    const[target, index] = this.getEstudiantePorDocumento(documento);
    this.estudiantes.splice(index, 1)
  }
}

@Entity()
export class EstudianteEntity {
    @PrimaryGeneratedColumn()
    documento: number
    @Column()
    nombre_completo: string
    @Column()
    telefono_fijo: number
    @Column()
    celular: number
    @Column()
    correo_estudiantil: string
    @Column()
    correo_personal: string
    @Column()
    codigo_plan: number
}
