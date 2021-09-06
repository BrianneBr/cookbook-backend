import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Recipe {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    description!: string;

    // TODO: ???? Idk how to set this up for hh:mm
    @Column({
        type: "time",
        nullable: true
    })
    cookTime!: Date;

    @Column({
        type: "int",
        nullable: true
    })
    servings!: number;

    @Column({
        type: "int",
        nullable: true
    })
    imageId!: number;

    @Column({
        type: "int",
        nullable: true
    })
    parentId!: number;

    @Column({
        type: "bool",
        nullable: true
    })
    hasVarient!: boolean;
}
