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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ArticleController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const base_api_response_dto_1 = require("../../shared/dtos/base-api-response.dto");
const article_input_dto_1 = require("../dtos/article-input.dto");
const article_output_dto_1 = require("../dtos/article-output.dto");
const article_service_1 = require("../services/article.service");
const logger_service_1 = require("../../shared/logger/logger.service");
const req_context_decorator_1 = require("../../shared/request-context/req-context.decorator");
const request_context_dto_1 = require("../../shared/request-context/request-context.dto");
const pagination_params_dto_1 = require("../../shared/dtos/pagination-params.dto");
let ArticleController = ArticleController_1 = class ArticleController {
    constructor(articleService, logger) {
        this.articleService = articleService;
        this.logger = logger;
        this.logger.setContext(ArticleController_1.name);
    }
    async createArticle(ctx, input) {
        const article = await this.articleService.createArticle(ctx, input);
        return { data: article, meta: {} };
    }
    async getArticles(ctx, query) {
        this.logger.log(ctx, `${this.getArticles.name} was called`);
        const { articles, count } = await this.articleService.getArticles(ctx, query.limit, query.offset);
        return { data: articles, meta: { count } };
    }
    async getArticle(ctx, id) {
        this.logger.log(ctx, `${this.getArticle.name} was called`);
        const article = await this.articleService.getArticleById(ctx, id);
        return { data: article, meta: {} };
    }
    async updateArticle(ctx, articleId, input) {
        const article = await this.articleService.updateArticle(ctx, articleId, input);
        return { data: article, meta: {} };
    }
    async deleteArticle(ctx, id) {
        this.logger.log(ctx, `${this.deleteArticle.name} was called`);
        return this.articleService.deleteArticle(ctx, id);
    }
};
__decorate([
    common_1.Post(),
    swagger_1.ApiOperation({
        summary: 'Create article API',
    }),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.CREATED,
        type: base_api_response_dto_1.SwaggerBaseApiResponse(article_output_dto_1.ArticleOutput),
    }),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, req_context_decorator_1.ReqContext()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_context_dto_1.RequestContext,
        article_input_dto_1.CreateArticleInput]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "createArticle", null);
__decorate([
    common_1.Get(),
    swagger_1.ApiOperation({
        summary: 'Get articles as a list API',
    }),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.OK,
        type: base_api_response_dto_1.SwaggerBaseApiResponse([article_output_dto_1.ArticleOutput]),
    }),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, req_context_decorator_1.ReqContext()),
    __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_context_dto_1.RequestContext,
        pagination_params_dto_1.PaginationParamsDto]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getArticles", null);
__decorate([
    common_1.Get(':id'),
    swagger_1.ApiOperation({
        summary: 'Get article by id API',
    }),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.OK,
        type: base_api_response_dto_1.SwaggerBaseApiResponse(article_output_dto_1.ArticleOutput),
    }),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.NOT_FOUND,
        type: base_api_response_dto_1.BaseApiErrorResponse,
    }),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, req_context_decorator_1.ReqContext()),
    __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_context_dto_1.RequestContext, Number]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getArticle", null);
__decorate([
    common_1.Patch(':id'),
    swagger_1.ApiOperation({
        summary: 'Update article API',
    }),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.OK,
        type: base_api_response_dto_1.SwaggerBaseApiResponse(article_output_dto_1.ArticleOutput),
    }),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    swagger_1.ApiBearerAuth(),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, req_context_decorator_1.ReqContext()),
    __param(1, common_1.Param('id')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_context_dto_1.RequestContext, Number, article_input_dto_1.UpdateArticleInput]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "updateArticle", null);
__decorate([
    common_1.Delete(':id'),
    swagger_1.ApiOperation({
        summary: 'Delete article by id API',
    }),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.NO_CONTENT,
    }),
    common_1.UseInterceptors(common_1.ClassSerializerInterceptor),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, req_context_decorator_1.ReqContext()),
    __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_context_dto_1.RequestContext, Number]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "deleteArticle", null);
ArticleController = ArticleController_1 = __decorate([
    swagger_1.ApiTags('articles'),
    common_1.Controller('articles'),
    __metadata("design:paramtypes", [article_service_1.ArticleService,
        logger_service_1.AppLogger])
], ArticleController);
exports.ArticleController = ArticleController;
//# sourceMappingURL=article.controller.js.map