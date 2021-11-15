import { Action } from './action.constant';
import { Resource } from './resource.constant';
import { ROLE } from './../../auth/constants/role.constant';
import { Actor } from './actor.constant';
export declare type RuleCallback = (resource: Resource, actor: Actor) => boolean;
export declare type AclRule = {
    role: ROLE;
    actions: Action[];
    ruleCallback?: RuleCallback;
};
