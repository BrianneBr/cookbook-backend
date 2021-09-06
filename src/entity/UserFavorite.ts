import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class UserFavorites {
    @Column()
    userId!: number;

    // "recipe" or "book"
    @Column()
    favoriteType!: string;

    // recipeID or bookId
    @Column()
    thingId!: number;
}
