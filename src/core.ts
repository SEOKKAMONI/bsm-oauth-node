import { Student, Teacher, Role } from './types/user';
import { ClientOptions } from './oauth';

export class Client {
  protected options: ClientOptions;

  constructor(options: ClientOptions = {}) {
    this.options = options;
  }
}

export const request = async <T>(
  path: string,
  body: Record<string, unknown>
): Promise<T> => {
  const url = 'https://auth.bssm.kro.kr/api/oauth'.concat(path);
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  return await response.json();
};

export function isStudent(user: Student | Teacher): user is Student {
  return user.role === Role.STUDENT;
}

export function isTeacher(user: Student | Teacher): user is Teacher {
  return user.role === Role.TEACHER;
}

export function isFalsy(value: any) {
  return (
    value === false ||
    value === null ||
    value === 0 ||
    value === '' ||
    value === undefined ||
    isNaN(value)
  );
}
