import { AclRule, RuleCallback } from './acl-rule.constant';
import { Action } from './action.constant';
import { ROLE } from './../../auth/constants/role.constant';
import { Actor } from './actor.constant';
export declare class BaseAclService {
    protected aclRules: AclRule[];
    protected canDo(role: ROLE, actions: Action[], ruleCallback?: RuleCallback): void;
    forActor: (actor: Actor) => any;
}
