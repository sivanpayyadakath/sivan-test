import { BaseAclService } from '../../shared/acl/acl.service';
import { Actor } from '../../shared/acl/actor.constant';
import { Article } from '../entities/article.entity';
export declare class ArticleAclService extends BaseAclService {
    constructor();
    isArticleAuthor(article: Article, user: Actor): boolean;
}
