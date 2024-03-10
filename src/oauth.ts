import { APIError } from './error';
import * as API from './resources';
import * as Core from './core';
import * as Type from './types';

export interface ClientOptions {
  clientId?: string;
  clientSecret?: string;
}

export class BsmOauth extends Core.APIClient {
  protected options: ClientOptions;

  constructor({ clientId, clientSecret }: ClientOptions) {
    super();

    if (clientId == undefined || clientSecret == undefined) {
      throw new APIError(400, '잘못된 클라이언트 정보입니다.');
    }

    this.options = { clientId, clientSecret };
  }

  user: API.User = new API.User(this.options);
  token: API.Token = new API.Token(this.options);
}

export namespace BsmOauth {
  export import Student = Type.Student;
  export import Teacher = Type.Teacher;
  export import Role = Type.Role;
}

export default BsmOauth;
