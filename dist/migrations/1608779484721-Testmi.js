"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Testmi1608779484721 = void 0;
class Testmi1608779484721 {
    constructor() {
        this.name = 'Testmi1608779484721';
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
exports.Testmi1608779484721 = Testmi1608779484721;
//# sourceMappingURL=1608779484721-Testmi.js.map