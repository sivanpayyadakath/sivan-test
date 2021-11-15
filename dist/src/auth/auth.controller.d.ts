import { Request } from 'express';
import { AuthService } from './auth.service';
import { LoginOutput, LoginInput } from './dto/login.dto';
import { RegisterInput, RegisterOutput } from './dto/register.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: Request, credential: LoginInput): Promise<LoginOutput>;
    registerLocal(input: RegisterInput): Promise<RegisterOutput>;
}
