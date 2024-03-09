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
}

export interface Teacher extends UserInfo {
  name: string;
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

    return data.user;
  }

  async getStudent(token: string) {
    if (token == undefined) {
      throw new APIError(404, '유효하지 않은 token입니다.');
    }

    const { data } = await this.client.post<{ user: Student }>('/resource', {
      token,
      ...this.options,
    });

    return data.user;
  }

  async getTeacher(token: string) {
    if (token == undefined) {
      throw new APIError(404, '유효하지 않은 token입니다.');
    }

    const { data } = await this.client.post<{ user: Teacher }>('/resource', {
      token,
      ...this.options,
    });

    return data.user;
  }

  async getRole(token: string) {
    if (token == undefined) {
      throw new APIError(404, '유효하지 않은 token입니다.');
    }

    const { data } = await this.client.post<{ role: Role }>('/resource', {
      token,
      ...this.options,
    });

    return data.role;
  }
}
