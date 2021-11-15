import { BaseApiResponse } from '../../shared/dtos/base-api-response.dto';
import { CreateArticleInput, UpdateArticleInput } from '../dtos/article-input.dto';
import { ArticleOutput } from '../dtos/article-output.dto';
import { ArticleService } from '../services/article.service';
import { AppLogger } from '../../shared/logger/logger.service';
import { RequestContext } from '../../shared/request-context/request-context.dto';
import { PaginationParamsDto } from '../../shared/dtos/pagination-params.dto';
export declare class ArticleController {
    private readonly articleService;
    private readonly logger;
    constructor(articleService: ArticleService, logger: AppLogger);
    createArticle(ctx: RequestContext, input: CreateArticleInput): Promise<BaseApiResponse<ArticleOutput>>;
    getArticles(ctx: RequestContext, query: PaginationParamsDto): Promise<BaseApiResponse<ArticleOutput[]>>;
    getArticle(ctx: RequestContext, id: number): Promise<BaseApiResponse<ArticleOutput>>;
    updateArticle(ctx: RequestContext, articleId: number, input: UpdateArticleInput): Promise<BaseApiResponse<ArticleOutput>>;
    deleteArticle(ctx: RequestContext, id: number): Promise<void>;
}
