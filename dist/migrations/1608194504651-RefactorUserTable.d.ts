import { MigrationInterface, QueryRunner } from "typeorm";
export declare class RefactorUserTable1608194504651 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
