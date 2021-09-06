import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class RecipeTag {
    @Column()
    tagId!: number;

    @Column()
    recipeId!: Buffer;
}
