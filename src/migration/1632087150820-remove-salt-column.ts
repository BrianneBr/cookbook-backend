import {MigrationInterface, QueryRunner} from "typeorm";

export class removeSaltColumn1632087150820 implements MigrationInterface {
    name = 'removeSaltColumn1632087150820'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "passwordSalt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "passwordSalt" character varying NOT NULL`);
    }

}
