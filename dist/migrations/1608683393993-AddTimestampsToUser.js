"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTimestampsToUser1608683393993 = void 0;
class AddTimestampsToUser1608683393993 {
    constructor() {
        this.name = 'AddTimestampsToUser1608683393993';
    }
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE `users` ADD `created_at` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `users` ADD `updated_at` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6)");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `updated_at`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `created_at`");
    }
}
exports.AddTimestampsToUser1608683393993 = AddTimestampsToUser1608683393993;
//# sourceMappingURL=1608683393993-AddTimestampsToUser.js.map