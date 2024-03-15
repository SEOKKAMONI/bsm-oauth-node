import 'dotenv/config';
import express from 'express';
import { BsmOauth, isStudent, isTeacher } from 'bsm-oauth-node';

const app = express();

const bsmOauth = new BsmOauth({
  clientId: process.env.BSM_AUTH_CLIENT_ID,
  clientSecret: process.env.BSM_AUTH_CLIENT_SECRET,
});

app.post('/oauth/bsm', async (req, res) => {
  const { authCode } = req.query;

  const user = await bsmOauth.user.get('');

  if (isStudent(user)) {
    return res.status(200).json(user);
  }

  if (isTeacher(user)) {
    return res.status(200).json(user);
  }

  return res.status(400).json({ error: 'user role이 비어있습니다.' });
});

app.listen(8088, () => {
  console.log('시스템 가동 준비 완료');
});
