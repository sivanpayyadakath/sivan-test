import { MigrationInterface, QueryRunner } from "typeorm";
export declare class RefactorUserTable1608194453705 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
