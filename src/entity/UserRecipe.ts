import {Entity, Column} from "typeorm";

@Entity()
export class UserRecipe {
    @Column()
    UserId!: number;

    @Column()
    RecipeId!: number;
}
