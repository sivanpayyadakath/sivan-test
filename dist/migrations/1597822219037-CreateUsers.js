"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsers1597822219037 = void 0;
class CreateUsers1597822219037 {
    constructor() {
        this.name = 'CreateUsers1597822219037';
    }
    async up(queryRunner) {
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(100) NOT NULL, `password` varchar(255) NOT NULL, `email` varchar(200) NOT NULL, UNIQUE INDEX `email` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }
    async down(queryRunner) {
        await queryRunner.query("DROP INDEX `email` ON `users`");
        await queryRunner.query("DROP TABLE `users`");
    }
}
exports.CreateUsers1597822219037 = CreateUsers1597822219037;
//# sourceMappingURL=1597822219037-CreateUsers.js.map