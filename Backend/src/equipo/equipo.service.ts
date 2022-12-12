import { Injectable } from '@nestjs/common';
import { Equipo } from './equipo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';




@Injectable()
export class EquipoService {

  constructor(@InjectRepository(Equipo) private equipoRepository: Repository<Equipo>){
    
  }

  insertEquipo(equipo: Equipo) {
    this.equipoRepository.save(equipo)
    return equipo.id;
  }

  getEquipos() {
    return this.equipoRepository.find();
  }

  getEquipo(id: number) {
    return this.equipoRepository.findOneBy({id});
  }

  async updateEquipo(equipo: Equipo, id: number) {
    const equipoEncontrado = await this.equipoRepository.findOneBy({id});
    equipo.nombre_completo ? equipoEncontrado.nombre_completo = equipo.nombre_completo : equipoEncontrado.nombre_completo =  equipoEncontrado.nombre_completo 
    equipo.modulo_sol ? equipoEncontrado.modulo_sol = equipo.modulo_sol : equipoEncontrado.modulo_sol =  equipoEncontrado.modulo_sol 
    equipo.docente_encargado ? equipoEncontrado.docente_encargado = equipo.docente_encargado : equipoEncontrado.docente_encargado =  equipoEncontrado.docente_encargado 
    equipo.numero_equipo ? equipoEncontrado.numero_equipo = equipo.numero_equipo : equipoEncontrado.numero_equipo =  equipoEncontrado.numero_equipo 
    await this.equipoRepository.save(equipoEncontrado)
    return {message: 'UPDATE CORRECTLY'}
  }


  deleteEquipo(id: number){
    this.equipoRepository.delete({id})
  }
}

