"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test1608775029386 = void 0;
class Test1608775029386 {
    constructor() {
        this.name = 'Test1608775029386';
    }
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE `users` ADD `createdAt` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `users` ADD `updatedAt` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6)");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `updatedAt`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `createdAt`");
    }
}
exports.Test1608775029386 = Test1608775029386;
//# sourceMappingURL=1608775029386-Test.js.map