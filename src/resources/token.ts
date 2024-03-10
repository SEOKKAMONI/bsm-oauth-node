import { BsmOauth } from '..';
import { APIError } from '../error';

export class Token extends BsmOauth {
  async get(authCode: string) {
    if (authCode == undefined || authCode == undefined) {
      throw new APIError(404, '유효하지 않은 authCode입니다.');
    }

    const { data } = await this.client.post<{ token: string }>('/token', {
      authCode,
      ...this.options,
    });

    return data.token;
  }
}
