import { Token } from './resources/token';
import { User } from './resources/user';
import { Client } from './core';
export interface ClientOptions {
    clientId?: string;
    clientSecret?: string;
}
export declare class BsmOauth extends Client {
    protected options: ClientOptions;
    constructor({ clientId, clientSecret }: ClientOptions);
    user: User;
    token: Token;
}
export default BsmOauth;
