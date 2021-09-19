import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Image {
    @PrimaryGeneratedColumn()
    id!: number;

    // @Column()
    // mimeType!: string;

    @Column({
        type: "bytea"
    })
    blob!: Buffer;
}
