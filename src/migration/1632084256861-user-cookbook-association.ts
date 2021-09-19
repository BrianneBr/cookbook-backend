import {MigrationInterface, QueryRunner} from "typeorm";

export class userCookbookAssociation1632084256861 implements MigrationInterface {
    name = 'userCookbookAssociation1632084256861'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."cookbook" ADD "authorId" integer`);
        await queryRunner.query(`ALTER TABLE "public"."cookbook" ADD CONSTRAINT "FK_ff6801c5641bcfa2d2352f682bc" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."cookbook" DROP CONSTRAINT "FK_ff6801c5641bcfa2d2352f682bc"`);
        await queryRunner.query(`ALTER TABLE "public"."cookbook" DROP COLUMN "authorId"`);
    }

}
