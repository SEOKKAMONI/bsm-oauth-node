import * as Core from './core';
import { APIError } from './error';
import * as API from './resources';

interface ClientOptions {
  clientId: string | null | undefined;
  clientSecret: string | null | undefined;
}

export class BsmOauth extends Core.APIClient {
  options: ClientOptions;

  constructor({ clientId, clientSecret }: ClientOptions) {
    if (clientId == undefined || clientSecret == undefined) {
      throw new APIError(400, '잘못된 클라이언트 정보입니다.');
    }

    super({ baseURL: 'https://auth.bssm.kro.kr/api/oauth', timeout: 15000 });

    this.options = {
      clientId,
      clientSecret,
    };
  }
}

export namespace BsmOauth {
  export import User = API.User;
  export import Token = API.Token;
}

export default BsmOauth;
