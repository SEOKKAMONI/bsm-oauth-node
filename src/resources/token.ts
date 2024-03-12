import { APIError } from '../error';
import { Client, request } from '../core';
import { ClientOptions } from '../oauth';

export class Token extends Client {
  constructor(options: ClientOptions) {
    super(options);
  }

  async get(authCode: string) {
    if (authCode == undefined) {
      throw new APIError(404, '유효하지 않은 authCode입니다.');
    }

    console.info('body', authCode, this.options);

    const data = await request<{ token: string }>('/token', {
      authCode,
      ...this.options,
    });

    return data.token;
  }
}
