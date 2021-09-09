import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import { Recipe } from "./Recipe";

@Entity()
export class Cookbook {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type: "text",
        nullable: true
    })
    description!: string;

    @ManyToMany(
        () => Recipe,
        recipe => recipe.cookbooks,
        {
            onDelete: "NO ACTION",
            onUpdate: "NO ACTION"
        }
    )
    @JoinTable()
    recipes!: Recipe[];
}
