import { Link, useNavigate } from 'react-router-dom';
import * as S from './styles';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import api from '../../services/api';

interface IUsers {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;

}

const schema = Yup.object().shape({
  firstName: Yup.string()
    .required('Nome é obrigatório'),

  lastName: Yup.string()
    .required('Sobrenome é obrigatório'),

  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('E-mail é obrigatório'),

  password: Yup.string()
    .required('A senha é obrigatória')
    .min(6, 'Senha deve ter no mínimo 6 caracteres'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Confirmação de senha incorreta')
    .required('Confirmação de senha é obrigatória'),
})


export const Register = () => {
  const navigation = useNavigate()
  const createNewUser = async (values: IUsers) => {
    console.log(values);
    const { confirmPassword, ...user } = values;
    console.log(user);
    await api.post('/users', user);
    navigation('/')
  }
  return (
    <S.Wrapper>
      <S.Container>
        <div className="register">
          <h1 className='titulo'>Novo Usuário</h1>
          <Formik
            validationSchema={schema}
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            onSubmit={(values) => createNewUser(values)}
          >
            {({
              errors,
              handleSubmit,
              handleChange,
              touched,
              isValid,
              dirty,
              isSubmitting,
            }) => (

              <Form
                onSubmit={handleSubmit}
                className='formulario'>
                <div className='container-input '>
                  <div>
                    <label htmlFor="firstName">Nome</label>
                    <input id="firstName" name="firstName" type="text" onChange={handleChange('firstName')} />
                    <p className='errors'>{touched.firstName && errors.firstName && errors.firstName}</p>
                  </div>

                  <div>
                    <label htmlFor="lastName">Sobrenome</label>
                    <input id="lastName" name="lastName" type="text" onChange={handleChange('lastName')} />
                    <p className='errors'>{touched.lastName && errors.lastName && errors.lastName}</p>
                  </div>

                  <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" onChange={handleChange('email')} />
                    <p className='errors'>{touched.email && errors.email && errors.email}</p>
                  </div>

                  <div>
                    <label htmlFor="password">Senha</label>
                    <input id="password" name="password" type="password" onChange={handleChange('password')} />
                    <p className='errors'>{touched.password && errors.password && errors.password}</p>
                  </div>

                  <div>
                    <label htmlFor="confirmPassword">Confirmar Senha</label>
                    <input id="confirmPassword" name="confirmPassword" type="password" onChange={handleChange('confirmPassword')} />
                    <p className='errors'>{touched.confirmPassword && errors.confirmPassword && errors.confirmPassword}</p>
                  </div>
                  <div className='Button'>

                    <Link to='/' className='Link'>Return</Link>

                    <button
                      type='submit'
                      disabled={isSubmitting || !(isValid && dirty)}
                    >Register</button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </S.Container>
    </S.Wrapper>
  )
}