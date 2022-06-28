import * as S from './styles';


const Login = () => {
  return (
    <S.Wrapper>
      <S.LoginTilte>
        <h1>Login</h1>
        <p>Bem vindo</p>
      </S.LoginTilte>
      <S.LoginForm>
        <S.LoginFormInput>
          <input type="email" placeholder='E-mail' />
          <input type="password" placeholder='Password' />
          <button type="submit">Entrar</button>
        </S.LoginFormInput>
      </S.LoginForm>

    </S.Wrapper>
  );
}
export default Login;