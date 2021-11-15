"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefactorUserTable1608194453705 = void 0;
class RefactorUserTable1608194453705 {
    constructor() {
        this.name = 'RefactorUserTable1608194453705';
    }
    async up(queryRunner) {
        await queryRunner.query("ALTER TABLE `users` ADD `isAccountDisabled` tinyint NOT NULL");
        await queryRunner.query("ALTER TABLE `users` ADD `email` varchar(200) NOT NULL");
        await queryRunner.query("ALTER TABLE `users` ADD UNIQUE INDEX `IDX_97672ac88f789774dd47f7c8be` (`email`)");
        await queryRunner.query("CREATE UNIQUE INDEX `email` ON `users` (`email`)");
    }
    async down(queryRunner) {
        await queryRunner.query("DROP INDEX `email` ON `users`");
        await queryRunner.query("ALTER TABLE `users` DROP INDEX `IDX_97672ac88f789774dd47f7c8be`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `email`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `isAccountDisabled`");
    }
}
exports.RefactorUserTable1608194453705 = RefactorUserTable1608194453705;
//# sourceMappingURL=1608194453705-RefactorUserTable.js.map