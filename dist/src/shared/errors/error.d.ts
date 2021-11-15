import { BaseApiError } from './base-api-error';
export declare class ResourceNotFoundError extends BaseApiError {
    constructor(name: string, id: number);
}
