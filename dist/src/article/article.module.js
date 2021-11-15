"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_auth_strategy_1 = require("../auth/strategies/jwt-auth.strategy");
const shared_module_1 = require("../shared/shared.module");
const user_module_1 = require("../user/user.module");
const article_controller_1 = require("./controllers/article.controller");
const article_repository_1 = require("./repositories/article.repository");
const article_acl_service_1 = require("./services/article-acl.service");
const article_service_1 = require("./services/article.service");
let ArticleModule = class ArticleModule {
};
ArticleModule = __decorate([
    common_1.Module({
        imports: [
            shared_module_1.SharedModule,
            typeorm_1.TypeOrmModule.forFeature([article_repository_1.ArticleRepository]),
            user_module_1.UserModule,
        ],
        providers: [article_service_1.ArticleService, jwt_auth_strategy_1.JwtAuthStrategy, article_acl_service_1.ArticleAclService],
        controllers: [article_controller_1.ArticleController],
        exports: [article_service_1.ArticleService],
    })
], ArticleModule);
exports.ArticleModule = ArticleModule;
//# sourceMappingURL=article.module.js.map