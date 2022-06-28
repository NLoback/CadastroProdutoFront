
import { Link } from 'react-router-dom';

import * as S from './styles';


const Login = () => {
  return (
    <S.Wrapper>
      <S.LoginTilte>
        <h1>Welcome</h1>
      </S.LoginTilte>
      <S.LoginForm>
        <S.LoginFormInput>
          <input type="email" placeholder='E-mail' />
          <input type="password" placeholder='Password' />
          <button type="submit">Login</button>
        </S.LoginFormInput>
      </S.LoginForm>
      <Link to='/register' id='register'>Register</Link>
    </S.Wrapper>
  );
}
export default Login;