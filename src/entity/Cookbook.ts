import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Cookbook {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    description!: string;
}
