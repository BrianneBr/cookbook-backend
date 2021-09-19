import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne} from "typeorm";
import { Recipe } from "./Recipe";
import { User } from "./User";

@Entity()
export class Cookbook {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type: "text",
        nullable: true
    })
    description!: string;

    @ManyToOne(() => User, user => user.books)
    author!: User;

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
