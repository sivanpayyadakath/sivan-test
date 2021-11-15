"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Testmi1608775905599 = void 0;
class Testmi1608775905599 {
    constructor() {
        this.name = 'Testmi1608775905599';
    }
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE `users` ADD `createdAt` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `users` ADD `updatedAt` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6)");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `updatedAt`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `createdAt`");
    }
}
exports.Testmi1608775905599 = Testmi1608775905599;
//# sourceMappingURL=1608775905599-Testmi.js.map