"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Testmi1608776965064 = void 0;
class Testmi1608776965064 {
    constructor() {
        this.name = 'Testmi1608776965064';
    }
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE `users` ADD `createdAt` datetime NOT NULL");
        await queryRunner.query("ALTER TABLE `users` ADD `updatedAt` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6)");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `updatedAt`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `createdAt`");
    }
}
exports.Testmi1608776965064 = Testmi1608776965064;
//# sourceMappingURL=1608776965064-Testmi.js.map