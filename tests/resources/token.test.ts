import { BsmOauth, APIError } from 'bsm-oauth-node';

import 'dotenv/config';

const bsmOauth = new BsmOauth({
  clientId: process.env.BSM_AUTH_CLIENT_ID,
  clientSecret: process.env.BSM_AUTH_CLIENT_SECRET,
});

describe('token', () => {
  test('authCode를 제공하지 않으면 에러가 발생해요.', async () => {
    try {
      await bsmOauth.token.get('');
    } catch (error) {
      const apiError = error as APIError;

      expect(apiError).toBeInstanceOf(APIError);
      expect(apiError.message).toBe('[404]: 유효하지 않은 authCode입니다.');
    }
  });
});
