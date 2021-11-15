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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleAclService = void 0;
const common_1 = require("@nestjs/common");
const role_constant_1 = require("../../auth/constants/role.constant");
const acl_service_1 = require("../../shared/acl/acl.service");
const action_constant_1 = require("../../shared/acl/action.constant");
let ArticleAclService = class ArticleAclService extends acl_service_1.BaseAclService {
    constructor() {
        super();
        this.canDo(role_constant_1.ROLE.ADMIN, [action_constant_1.Action.Manage]);
        this.canDo(role_constant_1.ROLE.USER, [action_constant_1.Action.Create, action_constant_1.Action.List, action_constant_1.Action.Read]);
        this.canDo(role_constant_1.ROLE.USER, [action_constant_1.Action.Update, action_constant_1.Action.Delete], this.isArticleAuthor);
    }
    isArticleAuthor(article, user) {
        return article.author.id === user.id;
    }
};
ArticleAclService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], ArticleAclService);
exports.ArticleAclService = ArticleAclService;
//# sourceMappingURL=article-acl.service.js.map