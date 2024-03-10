import axios, { type AxiosInstance } from 'axios';
import { Student, Teacher } from './resources';
import { Role } from './types/role';

interface APIClientOptions {
  baseURL: string;
  timeout: number;
}

export class APIClient {
  client: AxiosInstance;

  constructor({ baseURL, timeout }: APIClientOptions) {
    this.client = axios.create({ baseURL, timeout });
  }
}

export function isStudent(user: Student | Teacher): user is Student {
  return user.role === Role.STUDENT;
}

export function isTeacher(user: Student | Teacher): user is Teacher {
  if (user.role === Role.TEACHER) {
    return true;
  }
  return false;
}
