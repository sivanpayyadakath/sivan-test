import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddTimestampsToUser1608722738002 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
