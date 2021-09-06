import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class CookbookRecipe {
    @Column()
    bookId!: number;

    @Column()
    recipeId!: number;
}
