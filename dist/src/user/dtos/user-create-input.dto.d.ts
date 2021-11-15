import { ROLE } from '../../auth/constants/role.constant';
export declare class CreateUserInput {
    name: string;
    username: string;
    password: string;
    roles: ROLE[];
    email: string;
    isAccountDisabled: boolean;
}
