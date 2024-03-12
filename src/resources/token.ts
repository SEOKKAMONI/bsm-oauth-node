import { APIError } from '../error';
import { Client, request } from '../core';

export class Token extends Client {
  async get(authCode: string) {
    if (authCode == undefined) {
      throw new APIError(404, '유효하지 않은 authCode입니다.');
    }

    const { data } = await request<{ token: string }>('/token', {
      authCode,
      ...this.options,
    });

    return data.token;
  }
}
