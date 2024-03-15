import { APIError } from '../error';
import { Client, request, isFalsy } from '../core';
import { ClientOptions } from '../oauth';

export class Token extends Client {
  constructor(options: ClientOptions) {
    super(options);
  }

  async get(authCode: string) {
    try {
      if (isFalsy(authCode)) {
        throw new APIError(404, '유효하지 않은 authCode입니다.');
      }

      const data = await request<{ token: string }>('/token', {
        authCode,
        ...this.options,
      });

      return data.token;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
