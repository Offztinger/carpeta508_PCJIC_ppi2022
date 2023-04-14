import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Asesor {
    @PrimaryGeneratedColumn()
    documento: number
    @Column()
    nombre_completo: string
    @Column()
    correo_educativo: string
    @Column()
    tipo_asesor: number
}

