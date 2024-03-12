import { Student, Teacher } from './types/user';
import { ClientOptions } from './oauth';
export declare class Client {
    protected options: ClientOptions;
    constructor(options?: ClientOptions);
}
export declare const request: <T>(path: string, body: Object) => Promise<{
    data: T;
}>;
export declare function isStudent(user: Student | Teacher): user is Student;
export declare function isTeacher(user: Student | Teacher): user is Teacher;
