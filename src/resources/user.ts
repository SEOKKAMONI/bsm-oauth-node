import { BsmOauth } from '..';
import { Role } from '../types/role';

interface UserInfo {
  userCode: number;
  role: Role;
  nickname: string;
  email: string;
  profileUrl?: string;
}

interface Student extends UserInfo {
  name: string;
  enrolledAt: number;
  grade: number;
  classNo: number;
  studentNo: number;
  isGraduate: boolean;
  cardinal: number;
}

interface Teacher extends UserInfo {
  name: string;
}

export class User extends BsmOauth {
  async get(token: string) {
    const { data } = await this.client.post<{ user: Student | Teacher }>('/resource', {
      token,
      ...this.options,
    });

    const user: UserInfo = {
      ...data.user,
      profileUrl: data.user.profileUrl ?? '디폴트 이미지',
    };

    return user;
  }

  async getStudent(token: string) {
    const { data } = await this.client.post<{ user: Student }>('/resource', {
      token,
      ...this.options,
    });

    const student: UserInfo = {
      ...data.user,
      profileUrl: data.user.profileUrl ?? '디폴트 이미지',
    };

    return student;
  }

  async getTeacher(token: string) {
    const { data } = await this.client.post<{ user: Teacher }>('/resource', {
      token,
      ...this.options,
    });

    const teacher: UserInfo = {
      ...data.user,
      profileUrl: data.user.profileUrl ?? '디폴트 이미지',
    };

    return teacher;
  }

  async getRole(token: string) {
    const { data } = await this.client.post<{ role: Role }>('/resource', {
      token,
      ...this.options,
    });

    return data.role;
  }
}
