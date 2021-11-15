import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';
import { RegisterInput, RegisterOutput } from './dto/register.dto';
import { LoginOutput } from './dto/login.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    login(user: User): LoginOutput;
    register(input: RegisterInput): Promise<RegisterOutput>;
}
