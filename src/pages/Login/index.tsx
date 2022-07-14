
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import * as S from './styles';


const schema = Yup.object().shape({
  email: Yup.string()
    .required('Email é obrigatório'),

  password: Yup.string()
    .required('Senha é obrigatória'),
})

const Login = () => {
  return (
    <S.Wrapper>
      <S.LoginTilte>
        <h1>Bem-Vindo</h1>
      </S.LoginTilte>
      <Formik
        validationSchema={schema}
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, handleChange, touched }) => (
          <S.LoginForm>
            <S.LoginFormInput>

              <input type="email" placeholder='E-mail' />
              <p className='errors'>{touched.email && errors.email && errors.email}</p>

              <input type="password" placeholder='Password' />
              <p className='errors'>{touched.password && errors.password && errors.password}</p>

              <button type="submit">Login</button>
            </S.LoginFormInput>
          </S.LoginForm>
        )}
      </Formik>
      <Link to='/register' id='register'>Register</Link>
    </S.Wrapper>
  );
}
export default Login;