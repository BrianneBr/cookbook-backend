import {MigrationInterface, QueryRunner} from "typeorm";

export class cookTime1633997234115 implements MigrationInterface {
    name = 'cookTime1633997234115'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."recipe" RENAME COLUMN "cookTime" TO "cookTimeSeconds"`);
        await queryRunner.query(`ALTER TABLE "public"."recipe" DROP COLUMN "cookTimeSeconds"`);
        await queryRunner.query(`ALTER TABLE "public"."recipe" ADD "cookTimeSeconds" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."recipe" DROP COLUMN "cookTimeSeconds"`);
        await queryRunner.query(`ALTER TABLE "public"."recipe" ADD "cookTimeSeconds" TIME`);
        await queryRunner.query(`ALTER TABLE "public"."recipe" RENAME COLUMN "cookTimeSeconds" TO "cookTime"`);
    }

}
