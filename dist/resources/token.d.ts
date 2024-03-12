import { Client } from '../core';
export declare class Token extends Client {
    get(authCode: string): Promise<string>;
}
