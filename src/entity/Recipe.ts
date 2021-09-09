import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany} from "typeorm";
import { Cookbook } from "./Cookbook";
import { User } from "./User";

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

    @ManyToOne(() => User, user => user.recipes)
    user!: User; 

    @ManyToMany(() => Cookbook, cookbook => cookbook.recipes)
    cookbooks!: Cookbook[];
}
