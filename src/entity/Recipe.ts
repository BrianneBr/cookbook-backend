import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Recipe {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    description!: string;

    // ???? Idk how to set this up for hh:mm
    @Column()
    cookTime!: Date;

    @Column()
    servings!: number;

    @Column()
    imageId!: string;

    @Column()
    parentId!: number;

    @Column()
    hasVarient!: boolean;
}
