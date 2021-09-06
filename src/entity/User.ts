import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    username!: string;

    @Column({
        type: "text",
        nullable: true
    })
    email!: string;

    @Column()
    password!: string;

    @Column({
        type: "text",
        nullable: true
    })
    name!: string;

    @Column({
        type: "int",
        nullable: true
    })
    imageID!: number;
}
