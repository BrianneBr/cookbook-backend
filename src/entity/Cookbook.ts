import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Cookbook {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type: "text",
        nullable: true
    })
    description!: string;
}
