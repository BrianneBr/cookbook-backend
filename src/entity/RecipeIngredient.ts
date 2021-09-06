import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class RecipeIngredient {
    @Column()
    recipeId!: number;

    @Column()
    ingredientId!: number;

    // decimal
    @Column()
    quantityNumerator!: number;

    // int
    @Column()
    quantityDenominator!: number;

    // "tsp", "cups", "oz", etc
    @Column()
    units!: string;
}
