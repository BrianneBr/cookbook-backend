import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Image {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type: "bytea"
    })
    blob!: Buffer;
}
