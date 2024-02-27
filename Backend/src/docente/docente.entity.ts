import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Docente {
    @PrimaryGeneratedColumn()
    documento: number
    @Column()
    nombre_completo: string
    @Column()
    correo_educativo: string
    @Column()
    modulo_sol: string
    @Column()
    tipo_modulo: number
}

