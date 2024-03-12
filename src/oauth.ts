import { APIError } from './error';
import { Token } from './resources/token';
import { User } from './resources/user';

export interface ClientOptions {
  clientId?: string;
  clientSecret?: string;
}

export class BsmOauth {
  protected options: ClientOptions;
  user: User;
  token: Token;

  constructor({ clientId, clientSecret }: ClientOptions) {
    if (clientId == undefined || clientSecret == undefined) {
      throw new APIError(400, '잘못된 클라이언트 정보입니다.');
    }

    this.options = { clientId, clientSecret };
    this.user = new User(this.options);
    this.token = new Token(this.options);
  }
}

export default BsmOauth;
