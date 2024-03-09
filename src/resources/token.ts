import { BsmOauth } from '..';
import { APIError } from '../error';

export class Token extends BsmOauth {
  async get(authToken: string) {
    if (authToken == undefined || authToken == undefined) {
      throw new APIError(404, '유효하지 않은 authToken입니다.');
    }

    const { data } = await this.client.post<{ token: string }>('/token', {
      authToken,
      ...this.options,
    });

    return data.token;
  }
}
