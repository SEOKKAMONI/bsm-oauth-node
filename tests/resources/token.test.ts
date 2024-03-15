import { BsmOauth, APIError } from 'bsm-oauth-node';

import 'dotenv/config';

const bsmOauth = new BsmOauth({
  clientId: process.env.BSM_AUTH_CLIENT_ID,
  clientSecret: process.env.BSM_AUTH_CLIENT_SECRET,
});

describe('토큰 조회', () => {
  // NOTE: authCode를 테스트할 때마다 받아야 하는 불편함이 있기에 다른 방안이 생길 때까지 주석 처리를 해요.
  // test('유효한 authCode를 제공하면 토큰을 반환해요.', async () => {
  //   const token = await bsmOauth.token.get('authCode');

  //   expect(token).not.toBeNull();
  //   expect(token).toBeDefined();
  // });

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
