export class APIError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(`${APIError.makeMessage(status, message)}`);
    this.status = status;
  }

  private static makeMessage(status: number, message: string) {
    if (status && message) {
      return `[${status}]: ${message}`;
    }
    if (status) {
      return `[${status}]: 에러 메세지가 비어있습니다.`;
    }

    return '[500]: 서버에서 알 수 없는 오류가 발생했습니다.';
  }
}
