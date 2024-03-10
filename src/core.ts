import axios, { type AxiosInstance } from 'axios';
import { Student, Teacher, Role } from './types';

interface APIClientOptions {
  baseURL?: string;
  timeout?: number;
}

export class APIClient {
  protected client: AxiosInstance;
  protected options: APIClientOptions;

  constructor(options: APIClientOptions = {}) {
    const { baseURL = 'https://auth.bssm.kro.kr/api/oauth', timeout = 15000 } = options;

    this.options = { baseURL, timeout };
    this.client = axios.create({ baseURL, timeout });
  }
}

export function isStudent(user: Student | Teacher): user is Student {
  return user.role === Role.STUDENT;
}

export function isTeacher(user: Student | Teacher): user is Teacher {
  return user.role === Role.TEACHER;
}
