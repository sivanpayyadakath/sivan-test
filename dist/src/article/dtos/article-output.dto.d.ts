import { AuthorOutput } from './author-output.dto';
export declare class ArticleOutput {
    id: number;
    title: string;
    post: string;
    createdAt: Date;
    updatedAt: Date;
    author: AuthorOutput;
}
