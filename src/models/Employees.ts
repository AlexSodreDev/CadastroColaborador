
import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity("employees")
class Employees {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    cpf: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    birth_date: Date;

    @Column()
    hire_date: Date

}

export { Employees };