import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../user/services/user.service';
import { RegisterInput } from '../dtos/auth-register-input.dto';
import { RegisterOutput } from '../dtos/auth-register-output.dto';
import { AuthTokenOutput, UserAccessTokenClaims } from '../dtos/auth-token-output.dto';
import { UserOutput } from '../../user/dtos/user-output.dto';
import { AppLogger } from '../../shared/logger/logger.service';
import { RequestContext } from '../../shared/request-context/request-context.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    private configService;
    private readonly logger;
    constructor(userService: UserService, jwtService: JwtService, configService: ConfigService, logger: AppLogger);
    validateUser(ctx: RequestContext, username: string, pass: string): Promise<UserAccessTokenClaims>;
    login(ctx: RequestContext): AuthTokenOutput;
    register(ctx: RequestContext, input: RegisterInput): Promise<RegisterOutput>;
    refreshToken(ctx: RequestContext): Promise<AuthTokenOutput>;
    getAuthToken(ctx: RequestContext, user: UserAccessTokenClaims | UserOutput): AuthTokenOutput;
}
