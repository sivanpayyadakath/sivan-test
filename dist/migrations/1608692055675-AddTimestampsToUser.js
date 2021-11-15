"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTimestampsToUser1608692055675 = void 0;
class AddTimestampsToUser1608692055675 {
    constructor() {
        this.name = 'AddTimestampsToUser1608692055675';
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
exports.AddTimestampsToUser1608692055675 = AddTimestampsToUser1608692055675;
//# sourceMappingURL=1608692055675-AddTimestampsToUser.js.map