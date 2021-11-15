import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateArticles1612590521475 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
