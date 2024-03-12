## bsm-oauth-node

> BSM Oauth를 쉽고 빠르게 개발할 수 있도록 도와주는 라이브러리입니다.

### 설치

```shell
npm install bsm-oauth-node
```

```shell
pnpm add bsm-oauth-node
```

```shell
yarn add bsm-oauth-node
```

### 사용 예시

```tsx
import BsmOauth from 'bsm-oauth-node';

const bsmOauth = new BsmOauth({
  clientId: '클라이언트 아이디',
  clientSecret: '클라이언트 시크릿 키',
});

const login = async (authCode: string) => {
  const token = bsmOauth.token.get(authCode);
  const user = bsmOauth.user.get(token);

  console.log(user); // 유저의 정보
};
```

### 예정 작업

- 생성부터 개발까지 전반적인 가이드를 제공해주는 문서 개발
- BSM Oauth 연결 예제 프로젝트 개발
- 변수명 맵핑 모듈 개발
- 테스트 코드 작성
