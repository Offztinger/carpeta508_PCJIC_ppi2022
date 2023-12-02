import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Equipo {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    documento: string
    @Column()
    nombre_completo: string
    @Column()
    modulo_sol: string
    @Column()
    docente_encargado: string
    @Column()
    numero_equipo: number
}

