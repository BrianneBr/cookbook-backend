import {MigrationInterface, QueryRunner} from "typeorm";

export class screenName1633997457293 implements MigrationInterface {
    name = 'screenName1633997457293'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" RENAME COLUMN "name" TO "displayName"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" RENAME COLUMN "displayName" TO "name"`);
    }

}
