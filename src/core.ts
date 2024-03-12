import axios, { type AxiosInstance } from 'axios';
import { Student, Teacher, Role } from './types/user';
import { ClientOptions } from './oauth';

export class Client {
  protected options: ClientOptions;

  constructor(options: ClientOptions = {}) {
    this.options = options;
  }
}

export const instance: AxiosInstance = axios.create({
  baseURL: 'https://auth.bssm.kro.kr/api/oauth',
  adapter: 'http',
});

export function isStudent(user: Student | Teacher): user is Student {
  return user.role === Role.STUDENT;
}

export function isTeacher(user: Student | Teacher): user is Teacher {
  return user.role === Role.TEACHER;
}
