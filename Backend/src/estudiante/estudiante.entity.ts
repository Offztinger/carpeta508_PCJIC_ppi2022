import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Estudiante {
    @PrimaryGeneratedColumn()
    documento: number
    @Column()
    nombre_completo: string
    @Column()
    telefono_fijo: string
    @Column()
    celular: string
    @Column()
    correo_estudiantil: string
    @Column()
    correo_personal: string
    @Column()
    codigo_plan: string
}

