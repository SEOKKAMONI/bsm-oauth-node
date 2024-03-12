import { APIError } from './error';
import { Token } from './resources/token';
import { User } from './resources/user';
import { Client } from './core';

export interface ClientOptions {
  clientId?: string;
  clientSecret?: string;
}

export class BsmOauth extends Client {
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
