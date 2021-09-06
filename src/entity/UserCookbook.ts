import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class UserCookbook {
    @Column()
    userId!: number;

    @Column()
    bookId!: number;
}
