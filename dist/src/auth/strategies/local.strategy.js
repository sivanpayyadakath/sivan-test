"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LocalStrategy_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStrategy = void 0;
const passport_local_1 = require("passport-local");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const auth_service_1 = require("../services/auth.service");
const strategy_constant_1 = require("../constants/strategy.constant");
const logger_service_1 = require("../../shared/logger/logger.service");
const util_1 = require("../../shared/request-context/util");
let LocalStrategy = LocalStrategy_1 = class LocalStrategy extends passport_1.PassportStrategy(passport_local_1.Strategy, strategy_constant_1.STRATEGY_LOCAL) {
    constructor(authService, logger) {
        super({
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true,
        });
        this.authService = authService;
        this.logger = logger;
        this.logger.setContext(LocalStrategy_1.name);
    }
    async validate(request, username, password) {
        const ctx = util_1.createRequestContext(request);
        this.logger.log(ctx, `${this.validate.name} was called`);
        const user = await this.authService.validateUser(ctx, username, password);
        return user;
    }
};
LocalStrategy = LocalStrategy_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        logger_service_1.AppLogger])
], LocalStrategy);
exports.LocalStrategy = LocalStrategy;
//# sourceMappingURL=local.strategy.js.map