import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class UserRecipes {
    @Column()
    userId!: number;

    @Column()
    bookId!: number;
}
