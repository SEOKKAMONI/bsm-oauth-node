import { APIError } from './error';
import { User, Token } from './resources';
import { APIClient } from './core';

export interface ClientOptions {
  clientId?: string;
  clientSecret?: string;
}

export class BsmOauth extends APIClient {
  protected options: ClientOptions;

  constructor({ clientId, clientSecret }: ClientOptions) {
    super();

    if (clientId == undefined || clientSecret == undefined) {
      throw new APIError(400, '잘못된 클라이언트 정보입니다.');
    }

    this.options = { clientId, clientSecret };
  }

  user: User = new User(this.options);
  token: Token = new Token(this.options);
}

export default BsmOauth;
