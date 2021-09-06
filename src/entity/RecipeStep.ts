import {Entity, Column} from "typeorm";

@Entity()
export class Step {
    @Column()
    recipeId!: number;

    @Column()
    index!: number;

    @Column()
    title!: string;

    @Column()
    description!: string;
}
