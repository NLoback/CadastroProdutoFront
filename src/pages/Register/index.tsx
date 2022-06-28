import { Link } from 'react-router-dom';
import * as S from './styles';

const Register = () => {
  return (
    <S.Wrapper>
      <S.Form>
        <div className='titulo'><h2>New User</h2></div>

        <div className='formulario'>
          <label>
            First Name:
          </label>
          <input type="text" name="name" />
        </div>
        <div className='formulario'>
          <label>
            Last Name:
          </label>
          <input type="text" name="name" />
        </div>
        <div className='formulario'>
          <label>
            E-mail:
          </label>
          <input type="text" name="name" />
        </div>
        <div className='formulario'>
          <label>
            Password:
          </label>
          <input type="text" name="name" />
        </div>
        <div className='formulario'>
          <label>
            Confirm Password:
          </label>
          <input type="text" name="name" />
        </div>
        <div className='Button'>
          <Link to='/' className='Link'>Return</Link>
          <button>Register</button>
        </div>
      </S.Form>
    </S.Wrapper>
  )
}

export default Register;