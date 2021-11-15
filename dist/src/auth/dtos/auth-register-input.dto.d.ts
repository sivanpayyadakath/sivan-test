import { ROLE } from '../constants/role.constant';
export declare class RegisterInput {
    name: string;
    username: string;
    password: string;
    email: string;
    roles: ROLE[];
    isAccountDisabled: boolean;
}
