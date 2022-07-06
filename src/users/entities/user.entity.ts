import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { RoleEnum } from "../enums/role.enums";

@Entity()
export class BEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    public name: string

    @Column()
    public email: string

    @Column()
    public password: string

    @Column()
    salt: string;

    @Column({
        enum: RoleEnum
    })
    role: string;


}