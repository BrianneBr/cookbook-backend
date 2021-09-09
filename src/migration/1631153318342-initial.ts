import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1631153318342 implements MigrationInterface {
    name = 'initial1631153318342'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cookbook" ("id" SERIAL NOT NULL, "description" text, CONSTRAINT "PK_82d68bab383bd072c35cdda7c1b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "image" ("id" SERIAL NOT NULL, "blob" bytea NOT NULL, CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ingredient" ("id" SERIAL NOT NULL, "ingredientName" character varying NOT NULL, CONSTRAINT "PK_6f1e945604a0b59f56a57570e98" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "recipe" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "cookTime" TIME, "servings" integer, "imageId" integer, "parentId" integer, "hasVarient" boolean, CONSTRAINT "PK_e365a2fedf57238d970e07825ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tag" ("id" SERIAL NOT NULL, "tagName" character varying NOT NULL, "tagColor" text, CONSTRAINT "PK_8e4052373c579afc1471f526760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "email" text, "password" character varying NOT NULL, "name" text, "imageId" integer, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "tag"`);
        await queryRunner.query(`DROP TABLE "recipe"`);
        await queryRunner.query(`DROP TABLE "ingredient"`);
        await queryRunner.query(`DROP TABLE "image"`);
        await queryRunner.query(`DROP TABLE "cookbook"`);
    }

}
