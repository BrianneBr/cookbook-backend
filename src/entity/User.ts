import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Cookbook } from "./Cookbook";
import { Recipe } from "./Recipe";

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

    // TODO: salt this
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
    imageId!: number;

    @OneToMany(() => Recipe, recipe => recipe.user)
    recipes!: Recipe[];

    @OneToMany(() => Cookbook, book => book.author)
    books!: Cookbook[];
}
