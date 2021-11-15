import { UserRepository } from '../repositories/user.repository';
import { CreateUserInput } from '../dtos/user-create-input.dto';
import { UserOutput } from '../dtos/user-output.dto';
import { UpdateUserInput } from '../dtos/user-update-input.dto';
import { AppLogger } from '../../shared/logger/logger.service';
import { RequestContext } from '../../shared/request-context/request-context.dto';
export declare class UserService {
    private repository;
    private readonly logger;
    constructor(repository: UserRepository, logger: AppLogger);
    createUser(ctx: RequestContext, input: CreateUserInput): Promise<UserOutput>;
    validateUsernamePassword(ctx: RequestContext, username: string, pass: string): Promise<UserOutput>;
    getUsers(ctx: RequestContext, limit: number, offset: number): Promise<{
        users: UserOutput[];
        count: number;
    }>;
    findById(ctx: RequestContext, id: number): Promise<UserOutput>;
    getUserById(ctx: RequestContext, id: number): Promise<UserOutput>;
    findByUsername(ctx: RequestContext, username: string): Promise<UserOutput>;
    updateUser(ctx: RequestContext, userId: number, input: UpdateUserInput): Promise<UserOutput>;
}
