import {Entity, Column} from "typeorm";

@Entity()
export class Step {
    @Column()
    recipeId!: number;

    @Column()
    index!: number;

    @Column({
        type: "text",
        nullable: true
    })
    title!: string;

    @Column()
    description!: string;
}
