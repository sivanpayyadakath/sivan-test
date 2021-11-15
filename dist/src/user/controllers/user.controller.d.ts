import { UserService } from '../services/user.service';
import { BaseApiResponse } from '../../shared/dtos/base-api-response.dto';
import { PaginationParamsDto } from '../../shared/dtos/pagination-params.dto';
import { UserOutput } from '../dtos/user-output.dto';
import { UpdateUserInput } from '../dtos/user-update-input.dto';
import { AppLogger } from '../../shared/logger/logger.service';
import { RequestContext } from '../../shared/request-context/request-context.dto';
export declare class UserController {
    private readonly userService;
    private readonly logger;
    constructor(userService: UserService, logger: AppLogger);
    getMyProfile(ctx: RequestContext): Promise<BaseApiResponse<UserOutput>>;
    getUsers(ctx: RequestContext, query: PaginationParamsDto): Promise<BaseApiResponse<UserOutput[]>>;
    getUser(ctx: RequestContext, id: number): Promise<BaseApiResponse<UserOutput>>;
    updateUser(ctx: RequestContext, userId: number, input: UpdateUserInput): Promise<BaseApiResponse<UserOutput>>;
}
