function sayHello() {
  return 'hello';
}

describe('sayHello 함수 테스트', () => {
  it('sayHello 함수는 hello를 반환해야 함', () => {
    const result = sayHello();
    expect(result).toBe('hello');
  });
});
