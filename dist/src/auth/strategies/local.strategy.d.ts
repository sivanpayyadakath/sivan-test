import { Strategy } from 'passport-local';
import { Request } from 'express';
import { AuthService } from '../services/auth.service';
import { UserAccessTokenClaims } from '../dtos/auth-token-output.dto';
import { AppLogger } from '../../shared/logger/logger.service';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    private readonly logger;
    constructor(authService: AuthService, logger: AppLogger);
    validate(request: Request, username: string, password: string): Promise<UserAccessTokenClaims>;
}
export {};
