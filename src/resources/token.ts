import { BsmOauth } from '..';

export class Token extends BsmOauth {
  async get(authToken: string) {
    const { data } = await this.client.post<{ token: string }>('/token', {
      authToken,
      ...this.options,
    });

    return data.token;
  }
}
