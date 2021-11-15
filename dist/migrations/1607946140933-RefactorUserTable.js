"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefactorUserTable1607946140933 = void 0;
class RefactorUserTable1607946140933 {
    constructor() {
        this.name = 'RefactorUserTable1607946140933';
    }
    async up(queryRunner) {
        await queryRunner.query("DROP INDEX `IDX_fe0bb3f6520ee0469504521e71` ON `users`");
        await queryRunner.query("ALTER TABLE `users` ADD `roles` text NOT NULL");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `roles`");
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_fe0bb3f6520ee0469504521e71` ON `users` (`username`)");
    }
}
exports.RefactorUserTable1607946140933 = RefactorUserTable1607946140933;
//# sourceMappingURL=1607946140933-RefactorUserTable.js.map