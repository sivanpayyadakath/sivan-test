"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Testmi1608777934069 = void 0;
class Testmi1608777934069 {
    constructor() {
        this.name = 'Testmi1608777934069';
    }
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE `users` ADD `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `users` ADD `updatedAt` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6)");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `updatedAt`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `createdAt`");
    }
}
exports.Testmi1608777934069 = Testmi1608777934069;
//# sourceMappingURL=1608777934069-Testmi.js.map