import { Student, Teacher } from '../types/user';
import { Client } from '../core';
import { ClientOptions } from '../oauth';
export declare class User extends Client {
    constructor(options: ClientOptions);
    get(token: string): Promise<Student | Teacher>;
}
