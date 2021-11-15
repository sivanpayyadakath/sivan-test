import { User } from '../entities/user.entity';
import { BaseAclService } from '../../shared/acl/acl.service';
import { Actor } from './../../shared/acl/actor.constant';
export declare class UserAclService extends BaseAclService {
    constructor();
    isUserItself(resource: User, actor: Actor): boolean;
}
