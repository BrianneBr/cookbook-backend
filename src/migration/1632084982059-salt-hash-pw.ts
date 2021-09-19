import {MigrationInterface, QueryRunner} from "typeorm";

export class saltHashPw1632084982059 implements MigrationInterface {
    name = 'saltHashPw1632084982059'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "passwordSalt" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "passwordHash" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "passwordHash"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "passwordSalt"`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "password" character varying NOT NULL`);
    }

}
