import { APIError } from '../error';
import * as Core from '../core';

export class Token extends Core.APIClient {
  async get(authCode: string) {
    if (authCode == undefined) {
      throw new APIError(404, '유효하지 않은 authCode입니다.');
    }

    const { data } = await this.client.post<{ token: string }>('/token', {
      authCode,
      ...this.options,
    });

    return data.token;
  }
}
