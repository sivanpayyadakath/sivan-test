import { Request } from 'express';
import { UserService } from './user.service';
import { GetMeOutput } from './dto/me.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getMyProfile(req: Request): Promise<GetMeOutput>;
}
