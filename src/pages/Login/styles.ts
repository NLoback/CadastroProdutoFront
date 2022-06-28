import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: yellow;
  width: 100%;
  height: 100%;
  
`
export const LoginTilte = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
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
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 10px;
  margin: 10px;
  }
  button {
  
    width: 200px;
    height: 40px;
    background: linear-gradient(to right, black 50%, #ffffff 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    
    cursor: pointer;
    transition: all 900ms ease-out;
    margin: 20px;
  }
  button:hover {
    background-position: left bottom;
    color: #fff;
    box-shadow: 0px 0px 5px #31d1c5;
  }

`