import {MigrationInterface, QueryRunner} from "typeorm";

export class uniqueUserData1632095336837 implements MigrationInterface {
    name = 'uniqueUserData1632095336837'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "username" character varying(32) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username")`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" DROP CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "username" character varying NOT NULL`);
    }

}
