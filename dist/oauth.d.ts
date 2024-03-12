import { Token } from './resources/token';
import { User } from './resources/user';
export interface ClientOptions {
    clientId?: string;
    clientSecret?: string;
}
export declare class BsmOauth {
    protected options: ClientOptions;
    user: User;
    token: Token;
    constructor({ clientId, clientSecret }: ClientOptions);
}
export default BsmOauth;
