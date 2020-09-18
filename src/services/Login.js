import { setToken } from './Token';
import Api from './Api';

export default async function Login(email, password) {
  try {
    const response = await Api.post('/api/auth/loginAluno', {
      email,
      password
    });
    if (response.status === 200) {
      setToken(response.data.token);
    }
    return response;
  } catch (err) {
    return err.response;
  }
}
