"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTimestampsToUser1608722738002 = void 0;
class AddTimestampsToUser1608722738002 {
    constructor() {
        this.name = 'AddTimestampsToUser1608722738002';
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
exports.AddTimestampsToUser1608722738002 = AddTimestampsToUser1608722738002;
//# sourceMappingURL=1608722738002-AddTimestampsToUser.js.map