"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefactorUser1605498429591 = void 0;
class RefactorUser1605498429591 {
    constructor() {
        this.name = 'RefactorUser1605498429591';
    }
    async up(queryRunner) {
        await queryRunner.query("DROP INDEX `email` ON `users`");
        await queryRunner.query("ALTER TABLE `users` CHANGE `email` `username` varchar(200) NOT NULL");
        await queryRunner.query("ALTER TABLE `users` ADD UNIQUE INDEX `IDX_fe0bb3f6520ee0469504521e71` (`username`)");
        await queryRunner.query("CREATE UNIQUE INDEX `username` ON `users` (`username`)");
    }
    async down(queryRunner) {
        await queryRunner.query("DROP INDEX `username` ON `users`");
        await queryRunner.query("ALTER TABLE `users` DROP INDEX `IDX_fe0bb3f6520ee0469504521e71`");
        await queryRunner.query("ALTER TABLE `users` CHANGE `username` `email` varchar(200) NOT NULL");
        await queryRunner.query("CREATE UNIQUE INDEX `email` ON `users` (`email`)");
    }
}
exports.RefactorUser1605498429591 = RefactorUser1605498429591;
//# sourceMappingURL=1605498429591-RefactorUser.js.map