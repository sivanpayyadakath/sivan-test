"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Testmi1608778894947 = void 0;
class Testmi1608778894947 {
    constructor() {
        this.name = 'Testmi1608778894947';
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
exports.Testmi1608778894947 = Testmi1608778894947;
//# sourceMappingURL=1608778894947-Testmi.js.map