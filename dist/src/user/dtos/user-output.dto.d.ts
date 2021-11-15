import { ROLE } from '../../auth/constants/role.constant';
export declare class UserOutput {
    id: number;
    name: string;
    username: string;
    roles: ROLE[];
    email: string;
    isAccountDisabled: boolean;
    createdAt: string;
    updatedAt: string;
}
