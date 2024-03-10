import { APIError } from '../error';
import { Student, Teacher } from '../types';
import * as Core from '../core';

export class User extends Core.APIClient {
  async get(token: string) {
    if (token == undefined) {
      throw new APIError(404, '유효하지 않은 token입니다.');
    }

    const { data } = await this.client.post<{ user: Student | Teacher }>('/resource', {
      token,
      ...this.options,
    });

    if (Core.isStudent(data.user)) {
      return data.user;
    }

    if (Core.isTeacher(data.user)) {
      return data.user;
    }

    return data.user;
  }
}
