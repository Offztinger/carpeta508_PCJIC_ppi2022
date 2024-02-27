import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Cronograma {
    @PrimaryGeneratedColumn()
    numero_cita: number
    @Column()
    titulo: string
    @Column()
    fecha: string
    @Column()
    hora_inicio: string
    @Column()
    hora_fin: string
    @Column()
    descripcion: string
    @Column()
    lugar: string
}

