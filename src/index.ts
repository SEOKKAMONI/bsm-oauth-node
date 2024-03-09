import * as Core from './core';
import * as API from './resources';

interface ClientOptions {
  clientId: string | null | undefined;
  clientSecret: string | null | undefined;
}

export class BsmOauth extends Core.APIClient {
  protected options: ClientOptions;

  constructor({ clientId, clientSecret }: ClientOptions) {
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
