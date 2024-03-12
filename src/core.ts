import { Student, Teacher, Role } from './types/user';
import { ClientOptions } from './oauth';
export class Client {
  protected options: ClientOptions;

  constructor(options: ClientOptions = {}) {
    this.options = options;
  }
}

export const request = async <T>(path: string, body: Object): Promise<{ data: T }> => {
  const response = await fetch(`https://auth.bssm.kro.kr/api/oauth/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: body }),
  });

  console.info(response);

  return response.json();
};

export function isStudent(user: Student | Teacher): user is Student {
  return user.role === Role.STUDENT;
}

export function isTeacher(user: Student | Teacher): user is Teacher {
  return user.role === Role.TEACHER;
}
