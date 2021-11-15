"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Testmi1608778813436 = void 0;
class Testmi1608778813436 {
    constructor() {
        this.name = 'Testmi1608778813436';
    }
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE `users` ADD `createdAt` datetime NULL DEFAULT SYSDATETIME()");
        await queryRunner.query("ALTER TABLE `users` ADD `updatedAt` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6)");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `updatedAt`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `createdAt`");
    }
}
exports.Testmi1608778813436 = Testmi1608778813436;
//# sourceMappingURL=1608778813436-Testmi.js.map