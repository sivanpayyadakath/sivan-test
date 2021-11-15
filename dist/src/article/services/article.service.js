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
var ArticleService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleService = void 0;
const class_transformer_1 = require("class-transformer");
const common_1 = require("@nestjs/common");
const action_constant_1 = require("../../shared/acl/action.constant");
const user_entity_1 = require("../../user/entities/user.entity");
const user_service_1 = require("../../user/services/user.service");
const article_output_dto_1 = require("../dtos/article-output.dto");
const article_entity_1 = require("../entities/article.entity");
const article_repository_1 = require("../repositories/article.repository");
const article_acl_service_1 = require("./article-acl.service");
const logger_service_1 = require("../../shared/logger/logger.service");
let ArticleService = ArticleService_1 = class ArticleService {
    constructor(repository, userService, aclService, logger) {
        this.repository = repository;
        this.userService = userService;
        this.aclService = aclService;
        this.logger = logger;
        this.logger.setContext(ArticleService_1.name);
    }
    async createArticle(ctx, input) {
        this.logger.log(ctx, `${this.createArticle.name} was called`);
        const article = class_transformer_1.plainToClass(article_entity_1.Article, input);
        const actor = ctx.user;
        const user = await this.userService.getUserById(ctx, actor.id);
        const isAllowed = this.aclService
            .forActor(actor)
            .canDoAction(action_constant_1.Action.Create, article);
        if (!isAllowed) {
            throw new common_1.UnauthorizedException();
        }
        article.author = class_transformer_1.plainToClass(user_entity_1.User, user);
        this.logger.log(ctx, `calling ${article_repository_1.ArticleRepository.name}.save`);
        const savedArticle = await this.repository.save(article);
        return class_transformer_1.plainToClass(article_output_dto_1.ArticleOutput, savedArticle, {
            excludeExtraneousValues: true,
        });
    }
    async getArticles(ctx, limit, offset) {
        this.logger.log(ctx, `${this.getArticles.name} was called`);
        const actor = ctx.user;
        const isAllowed = this.aclService.forActor(actor).canDoAction(action_constant_1.Action.List);
        if (!isAllowed) {
            throw new common_1.UnauthorizedException();
        }
        this.logger.log(ctx, `calling ${article_repository_1.ArticleRepository.name}.findAndCount`);
        const [articles, count] = await this.repository.findAndCount({
            where: {},
            take: limit,
            skip: offset,
        });
        const articlesOutput = class_transformer_1.plainToClass(article_output_dto_1.ArticleOutput, articles, {
            excludeExtraneousValues: true,
        });
        return { articles: articlesOutput, count };
    }
    async getArticleById(ctx, id) {
        this.logger.log(ctx, `${this.getArticleById.name} was called`);
        const actor = ctx.user;
        this.logger.log(ctx, `calling ${article_repository_1.ArticleRepository.name}.getById`);
        const article = await this.repository.getById(id);
        const isAllowed = this.aclService
            .forActor(actor)
            .canDoAction(action_constant_1.Action.Read, article);
        if (!isAllowed) {
            throw new common_1.UnauthorizedException();
        }
        return class_transformer_1.plainToClass(article_output_dto_1.ArticleOutput, article, {
            excludeExtraneousValues: true,
        });
    }
    async updateArticle(ctx, articleId, input) {
        this.logger.log(ctx, `${this.updateArticle.name} was called`);
        this.logger.log(ctx, `calling ${article_repository_1.ArticleRepository.name}.getById`);
        const article = await this.repository.getById(articleId);
        const actor = ctx.user;
        const isAllowed = this.aclService
            .forActor(actor)
            .canDoAction(action_constant_1.Action.Update, article);
        if (!isAllowed) {
            throw new common_1.UnauthorizedException();
        }
        const updatedArticle = Object.assign(Object.assign({}, article), class_transformer_1.plainToClass(article_entity_1.Article, input));
        this.logger.log(ctx, `calling ${article_repository_1.ArticleRepository.name}.save`);
        const savedArticle = await this.repository.save(updatedArticle);
        return class_transformer_1.plainToClass(article_output_dto_1.ArticleOutput, savedArticle, {
            excludeExtraneousValues: true,
        });
    }
    async deleteArticle(ctx, id) {
        this.logger.log(ctx, `${this.deleteArticle.name} was called`);
        this.logger.log(ctx, `calling ${article_repository_1.ArticleRepository.name}.getById`);
        const article = await this.repository.getById(id);
        const actor = ctx.user;
        const isAllowed = this.aclService
            .forActor(actor)
            .canDoAction(action_constant_1.Action.Delete, article);
        if (!isAllowed) {
            throw new common_1.UnauthorizedException();
        }
        this.logger.log(ctx, `calling ${article_repository_1.ArticleRepository.name}.remove`);
        await this.repository.remove(article);
    }
};
ArticleService = ArticleService_1 = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [article_repository_1.ArticleRepository,
        user_service_1.UserService,
        article_acl_service_1.ArticleAclService,
        logger_service_1.AppLogger])
], ArticleService);
exports.ArticleService = ArticleService;
//# sourceMappingURL=article.service.js.map