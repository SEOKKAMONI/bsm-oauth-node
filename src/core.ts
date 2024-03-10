import axios, { type AxiosInstance } from 'axios';
import { Student, Teacher, Role } from './types';
import { ClientOptions } from './oauth';

export class APIClient {
  protected client: AxiosInstance;
  protected options: ClientOptions;

  constructor(options: ClientOptions = {}) {
    this.options = options;
    this.client = axios.create({
      baseURL: 'https://auth.bssm.kro.kr/api/oauth',
      timeout: 15000,
    });
  }
}

export function isStudent(user: Student | Teacher): user is Student {
  return user.role === Role.STUDENT;
}

export function isTeacher(user: Student | Teacher): user is Teacher {
  return user.role === Role.TEACHER;
}
