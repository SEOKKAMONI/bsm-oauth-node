import { Student, Teacher } from '../types/user';
import { Client } from '../core';
export declare class User extends Client {
    get(token: string): Promise<Student | Teacher>;
}
