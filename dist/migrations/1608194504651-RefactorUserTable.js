"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefactorUserTable1608194504651 = void 0;
class RefactorUserTable1608194504651 {
    constructor() {
        this.name = 'RefactorUserTable1608194504651';
    }
    async up(queryRunner) {
        await queryRunner.query("DROP INDEX `IDX_97672ac88f789774dd47f7c8be` ON `users`");
    }
    async down(queryRunner) {
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_97672ac88f789774dd47f7c8be` ON `users` (`email`)");
    }
}
exports.RefactorUserTable1608194504651 = RefactorUserTable1608194504651;
//# sourceMappingURL=1608194504651-RefactorUserTable.js.map