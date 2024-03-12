export declare enum Role {
    STUDENT = "STUDENT",
    TEACHER = "TEACHER"
}
interface UserInfo {
    userCode: number;
    role: Role;
    nickname: string;
    email: string;
    profileUrl?: string;
}
export interface Student extends UserInfo {
    name: string;
    enrolledAt: number;
    grade: number;
    classNo: number;
    studentNo: number;
    isGraduate: boolean;
    cardinal: number;
    role: Role.STUDENT;
}
export interface Teacher extends UserInfo {
    name: string;
    role: Role.TEACHER;
}
export {};
