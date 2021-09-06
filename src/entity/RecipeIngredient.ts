import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class RecipeIngredient {
    @Column()
    recipeId!: number;

    @Column()
    ingredientId!: number;

    @Column({
        type: "decimal",
        nullable: true
    })
    quantityNumerator!: number;

    @Column({
        type: "int",
        nullable: true
    })
    quantityDenominator!: number;

    // "tsp", "cups", "oz", etc
    @Column({
        type: "text",
        nullable: true
    })
    units!: string;
}
