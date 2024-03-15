import { APIError } from '../error';
import { Student, Teacher } from '../types/user';
import { Client, request, isStudent, isTeacher, isFalsy } from '../core';
import { ClientOptions } from '../oauth';

export class User extends Client {
  constructor(options: ClientOptions) {
    super(options);
  }

  async get(token: string) {
    try {
      if (isFalsy(token)) {
        throw new APIError(404, '유효하지 않은 token입니다.');
      }

      const data = await request<{ user: Student | Teacher }>('/resource', {
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
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
