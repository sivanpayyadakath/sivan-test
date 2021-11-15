import { MigrationInterface, QueryRunner } from "typeorm";
export declare class RefactorUser1605498429591 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
