import { UserService } from '../../user/services/user.service';
import { CreateArticleInput, UpdateArticleInput } from '../dtos/article-input.dto';
import { ArticleOutput } from '../dtos/article-output.dto';
import { ArticleRepository } from '../repositories/article.repository';
import { ArticleAclService } from './article-acl.service';
import { RequestContext } from '../../shared/request-context/request-context.dto';
import { AppLogger } from '../../shared/logger/logger.service';
export declare class ArticleService {
    private repository;
    private userService;
    private aclService;
    private readonly logger;
    constructor(repository: ArticleRepository, userService: UserService, aclService: ArticleAclService, logger: AppLogger);
    createArticle(ctx: RequestContext, input: CreateArticleInput): Promise<ArticleOutput>;
    getArticles(ctx: RequestContext, limit: number, offset: number): Promise<{
        articles: ArticleOutput[];
        count: number;
    }>;
    getArticleById(ctx: RequestContext, id: number): Promise<ArticleOutput>;
    updateArticle(ctx: RequestContext, articleId: number, input: UpdateArticleInput): Promise<ArticleOutput>;
    deleteArticle(ctx: RequestContext, id: number): Promise<void>;
}
