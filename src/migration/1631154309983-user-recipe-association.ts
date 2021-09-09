import {MigrationInterface, QueryRunner} from "typeorm";

export class userRecipeAssociation1631154309983 implements MigrationInterface {
    name = 'userRecipeAssociation1631154309983'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."recipe" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "public"."recipe" ADD CONSTRAINT "FK_fe30fdc515f6c94d39cd4bbfa76" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."recipe" DROP CONSTRAINT "FK_fe30fdc515f6c94d39cd4bbfa76"`);
        await queryRunner.query(`ALTER TABLE "public"."recipe" DROP COLUMN "userId"`);
    }

}
