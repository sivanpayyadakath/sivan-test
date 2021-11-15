"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Testmi1608776247487 = void 0;
class Testmi1608776247487 {
    constructor() {
        this.name = 'Testmi1608776247487';
    }
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE `users` ADD `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP");
        await queryRunner.query("ALTER TABLE `users` ADD `updatedAt` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6)");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `updatedAt`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `createdAt`");
    }
}
exports.Testmi1608776247487 = Testmi1608776247487;
//# sourceMappingURL=1608776247487-Testmi.js.map