import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class UserRecipes {
    @Column()
    UserId!: number;

    @Column()
    RecipeId!: number;
}
