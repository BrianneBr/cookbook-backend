import {MigrationInterface, QueryRunner} from "typeorm";

export class cookbookRecipeAssociation1631155497295 implements MigrationInterface {
    name = 'cookbookRecipeAssociation1631155497295'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cookbook_recipes_recipe" ("cookbookId" integer NOT NULL, "recipeId" integer NOT NULL, CONSTRAINT "PK_2289028e5a71a8afd66e0a19dbf" PRIMARY KEY ("cookbookId", "recipeId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_aa68865b059c2113cba84384a4" ON "cookbook_recipes_recipe" ("cookbookId") `);
        await queryRunner.query(`CREATE INDEX "IDX_35ef3da33b4d4306bc269b248b" ON "cookbook_recipes_recipe" ("recipeId") `);
        await queryRunner.query(`ALTER TABLE "cookbook_recipes_recipe" ADD CONSTRAINT "FK_aa68865b059c2113cba84384a41" FOREIGN KEY ("cookbookId") REFERENCES "cookbook"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cookbook_recipes_recipe" ADD CONSTRAINT "FK_35ef3da33b4d4306bc269b248b8" FOREIGN KEY ("recipeId") REFERENCES "recipe"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cookbook_recipes_recipe" DROP CONSTRAINT "FK_35ef3da33b4d4306bc269b248b8"`);
        await queryRunner.query(`ALTER TABLE "cookbook_recipes_recipe" DROP CONSTRAINT "FK_aa68865b059c2113cba84384a41"`);
        await queryRunner.query(`DROP INDEX "IDX_35ef3da33b4d4306bc269b248b"`);
        await queryRunner.query(`DROP INDEX "IDX_aa68865b059c2113cba84384a4"`);
        await queryRunner.query(`DROP TABLE "cookbook_recipes_recipe"`);
    }

}
