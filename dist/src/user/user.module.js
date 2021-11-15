"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const shared_module_1 = require("../shared/shared.module");
const user_controller_1 = require("./controllers/user.controller");
const user_service_1 = require("./services/user.service");
const user_repository_1 = require("./repositories/user.repository");
const jwt_auth_strategy_1 = require("../auth/strategies/jwt-auth.strategy");
const user_acl_service_1 = require("./services/user-acl.service");
let UserModule = class UserModule {
};
UserModule = __decorate([
    common_1.Module({
        imports: [shared_module_1.SharedModule, typeorm_1.TypeOrmModule.forFeature([user_repository_1.UserRepository])],
        providers: [user_service_1.UserService, jwt_auth_strategy_1.JwtAuthStrategy, user_acl_service_1.UserAclService],
        controllers: [user_controller_1.UserController],
        exports: [user_service_1.UserService],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map