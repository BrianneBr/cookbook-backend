import {Entity, Column} from "typeorm";

@Entity()
export class UserFavorite {
    @Column()
    userId!: number;

    // "recipe" or "book"
    @Column()
    favoriteType!: string;

    // recipeID or bookId
    @Column()
    thingId!: number;
}
