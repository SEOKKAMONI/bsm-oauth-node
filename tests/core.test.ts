import { isStudent, isTeacher } from 'bsm-oauth-node';

describe('isStudent', () => {
  test('user role이 학생이면 true를 반환해요.', async () => {
    const user = {
      role: 'STUDENT',
      name: '김석진',
      enrolledAt: 2022,
      grade: 3,
      classNo: 2,
      studentNo: 4,
      isGraduate: false,
      cardinal: 2,
    };

    expect(isStudent(user as any)).toBe(true);
  });
  test('user role이 학생이 아니면 false를 반환해요.', async () => {
    const user = {
      role: 'TEACHER',
      name: '김석진',
      enrolledAt: 2022,
      grade: 3,
      classNo: 2,
      studentNo: 4,
      isGraduate: false,
      cardinal: 2,
    };

    expect(isStudent(user as any)).toBe(false);
  });
});

describe('isTeacher', () => {
  test('user role이 선생님이면 true를 반환해요.', async () => {
    const user = {
      role: 'TEACHER',
      name: '김석진',
      enrolledAt: 2022,
      grade: 3,
      classNo: 2,
      studentNo: 4,
      isGraduate: false,
      cardinal: 2,
    };

    expect(isTeacher(user as any)).toBe(true);
  });
  test('user role이 선생님이 아니면 false를 반환해요.', async () => {
    const user = {
      role: 'STUDENT',
      name: '김석진',
      enrolledAt: 2022,
      grade: 3,
      classNo: 2,
      studentNo: 4,
      isGraduate: false,
      cardinal: 2,
    };

    expect(isTeacher(user as any)).toBe(false);
  });
});
