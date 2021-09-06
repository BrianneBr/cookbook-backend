import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Tag {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    tagName!: string;

    @Column({
        type: "text",
        nullable: true
    })
    tagColor!: string;
}
