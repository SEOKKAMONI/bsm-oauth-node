import { type AxiosInstance } from 'axios';
import { Student, Teacher } from './types/user';
import { ClientOptions } from './oauth';
export declare class Client {
    protected options: ClientOptions;
    constructor(options?: ClientOptions);
}
export declare const instance: AxiosInstance;
export declare function isStudent(user: Student | Teacher): user is Student;
export declare function isTeacher(user: Student | Teacher): user is Teacher;