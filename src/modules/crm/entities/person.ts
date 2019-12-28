import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Length} from "class-validator";
import {CivilStatus, Gender, Salutation} from "./enums";

@Entity()
export class Person {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "enum",
        enum: Salutation,
        nullable: true
    })
    salutation: Salutation

    @Column()
    @Length(4, 40)
    firstName: string

    @Column()
    @Length(4, 40)
    lastName: string

    @Column({nullable: true})
    @Length(4, 40)
    middleName: string

    @Column({nullable: true})
    about: string

    @Column({
        type: "enum",
        enum: Gender,
        nullable: false
    })
    gender: Gender

    @Column({
        type: "enum",
        enum: CivilStatus,
        nullable: true
    })
    civilStatus: CivilStatus

    @Column({nullable: true})
    avatar: string

    @Column()
    dateOfBirth: Date
}