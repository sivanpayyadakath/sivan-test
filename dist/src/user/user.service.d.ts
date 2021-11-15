import { UserRepository } from './user.repository';
import { User } from './entities/user.entity';
import { AddUserInput, AddUserOutput } from './dto/add-user.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: UserRepository);
    add(input: AddUserInput): Promise<AddUserOutput>;
    findByEmail(email: string): Promise<User>;
    findById(id: number): Promise<User>;
}
