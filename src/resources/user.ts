import { APIError } from '../error';
import { Student, Teacher } from '../types';
import { APIClient, isStudent, isTeacher } from '../core';

export class User extends APIClient {
  async get(token: string) {
    if (token == undefined) {
      throw new APIError(404, '유효하지 않은 token입니다.');
    }

    const { data } = await this.client.post<{ user: Student | Teacher }>('/resource', {
      token,
      ...this.options,
    });

    if (isStudent(data.user)) {
      return data.user;
    }

    if (isTeacher(data.user)) {
      return data.user;
    }

    return data.user;
  }
}
