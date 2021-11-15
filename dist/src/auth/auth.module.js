"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const user_module_1 = require("../user/user.module");
const shared_module_1 = require("../shared/shared.module");
const auth_controller_1 = require("./controllers/auth.controller");
const auth_service_1 = require("./services/auth.service");
const local_strategy_1 = require("./strategies/local.strategy");
const jwt_auth_strategy_1 = require("./strategies/jwt-auth.strategy");
const jwt_refresh_strategy_1 = require("./strategies/jwt-refresh.strategy");
const strategy_constant_1 = require("./constants/strategy.constant");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [
            shared_module_1.SharedModule,
            passport_1.PassportModule.register({ defaultStrategy: strategy_constant_1.STRATEGY_JWT_AUTH }),
            jwt_1.JwtModule.registerAsync({
                imports: [shared_module_1.SharedModule],
                useFactory: async (configService) => ({
                    publicKey: configService.get('jwt.publicKey'),
                    privateKey: configService.get('jwt.privateKey'),
                    signOptions: {
                        algorithm: 'RS256',
                    },
                }),
                inject: [config_1.ConfigService],
            }),
            user_module_1.UserModule,
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, local_strategy_1.LocalStrategy, jwt_auth_strategy_1.JwtAuthStrategy, jwt_refresh_strategy_1.JwtRefreshStrategy],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map