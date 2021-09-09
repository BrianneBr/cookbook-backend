import {MigrationInterface, QueryRunner} from "typeorm";

export class cookbookRecipeNoCascade1631155889723 implements MigrationInterface {
    name = 'cookbookRecipeNoCascade1631155889723'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."cookbook_recipes_recipe" DROP CONSTRAINT "FK_aa68865b059c2113cba84384a41"`);
        await queryRunner.query(`ALTER TABLE "public"."cookbook_recipes_recipe" ADD CONSTRAINT "FK_aa68865b059c2113cba84384a41" FOREIGN KEY ("cookbookId") REFERENCES "cookbook"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."cookbook_recipes_recipe" DROP CONSTRAINT "FK_aa68865b059c2113cba84384a41"`);
        await queryRunner.query(`ALTER TABLE "public"."cookbook_recipes_recipe" ADD CONSTRAINT "FK_aa68865b059c2113cba84384a41" FOREIGN KEY ("cookbookId") REFERENCES "cookbook"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
