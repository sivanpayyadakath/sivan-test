export declare class TokenUserIdentity {
    id: number;
}
export declare class TokenUser extends TokenUserIdentity {
    email: string;
}
export declare class AuthToken {
    access_token: string;
    refresh_token?: string;
}
