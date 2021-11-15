"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test1608780406160 = void 0;
class Test1608780406160 {
    constructor() {
        this.name = 'Test1608780406160';
    }
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE `users` ADD `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `users` ADD `updatedAt` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `users` ADD `testDate` date NULL");
        await queryRunner.query("ALTER TABLE `users` ADD `testDateTime` datetime NULL");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `testDateTime`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `testDate`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `updatedAt`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `createdAt`");
    }
}
exports.Test1608780406160 = Test1608780406160;
//# sourceMappingURL=1608780406160-Test.js.map