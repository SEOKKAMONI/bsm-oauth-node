import { Client } from '../core';
import { ClientOptions } from '../oauth';
export declare class Token extends Client {
    constructor(options: ClientOptions);
    get(authCode: string): Promise<string>;
}
