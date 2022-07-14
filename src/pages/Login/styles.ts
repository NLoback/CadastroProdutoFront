import styled from 'styled-components';
import fundo from './img/fundo.jpg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image:url(${fundo});
  background-size: cover;
  width: 100%;
  height: 100%;
  color: white;

  #register{
  color: #fff;
  font-size: 16px;
  }

`
export const LoginTilte = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  font-family: 'Roboto', sans-serif;
`
export const LoginForm = styled.div`
  display: flex;
  flex-direction: ;
  align-items: center;
  margin: 20px;

  
`

export const LoginFormInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
  width: 250px;
  height: 40px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  border: none;
  background-color: #fff5;
  padding: 0 10px;
  margin: 10px;

    &:focus {
      outline: none;
    }
  }

  button {
    width: 100px;
    height: 30px;
    background: linear-gradient(to right, #fff4 50%, #fff6 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
    cursor: pointer;
    transition: all 900ms ease-out;
    margin: 10px;
  }

  button:hover {
    background-position: left bottom;
    color: #fff;
    box-shadow: 0px 0px 5px #fff;
  }

  
`