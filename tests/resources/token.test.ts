import { BsmOauth } from 'bsm-oauth-node';
import { APIError } from '../error';

const bsmOauth = new BsmOauth({
  clientId: '클라이언트 아이디',
  clientSecret: '클라이언트 시크릿 키',
});

describe('토큰 조회', () => {
  test('유효한 authCode를 제공하면 토큰을 반환해요.', async () => {
    const token = await bsmOauth.token.get('authCode');

    expect(token).not.toBeNull();
    expect(token).toBeDefined();
  });

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
