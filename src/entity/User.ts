import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Cookbook } from "./Cookbook";
import { Recipe } from "./Recipe";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type: "varchar",
        length: 32,
        unique: true
    })
    username!: string;

    @Column({
        type: "text",
        nullable: true,
        unique: true
    })
    email!: string;

    @Column()
    passwordHash!: string;

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
