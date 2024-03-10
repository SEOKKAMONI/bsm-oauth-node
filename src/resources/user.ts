import { BsmOauth } from '..';
import { APIError } from '../error';
import { Role } from '../types/role';

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

export class User extends BsmOauth {
  async get(token: string) {
    if (token == undefined) {
      throw new APIError(404, '유효하지 않은 token입니다.');
    }

    const { data } = await this.client.post<{ user: Student | Teacher }>('/resource', {
      token,
      ...this.options,
    });

    if (data.user.role === Role.STUDENT) {
      return data.user;
    }

    if (data.user.role === Role.TEACHER) {
      return data.user;
    }

    return data.user;
  }
}
