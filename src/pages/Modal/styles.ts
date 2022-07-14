import styled, { css } from "styled-components";


export const Modal = styled.div` 
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.8);
`

export const ModalContainer = styled.div`
  position: relative;
  top: 10%;
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 500px;
  border-radius: 10px;
  margin: auto;
  background: #fff;

  input {
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    padding: 5px;
    &:focus {
      outline: none;
    }
  }
`
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:30px;
  background: #500534;
  width: 450px;
  height: 50px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: white;
`

export const Buttons = styled.div` 
  display: flex;
  justify-content: space-between;
  margin: 30px;
  width: 200px;
  align-items: center;
  justify-content:space-between;
`

export const ButtonClose = styled.button`
  width: 80px;
  height: 40px;
  background: linear-gradient(to right,  #b300bc  50%,  #bc74c0  50%);
  background-size: 200% 100%;
  background-position: right bottom;
  cursor: pointer;
  transition: all 700ms ease-out;
  border-radius: 10px;
  
  &:hover {
  background-position: left bottom;
  color: #fff;
  box-shadow: 0px 0px 5px #31d1c5;
  }
`

export const buttonSave = styled.button`
  width: 80px;
  height: 40px;
  background: linear-gradient(to right,  #b300bc  50%,  #bc74c0  50%);
  background-size: 200% 100%;
  background-position: right bottom;
  cursor: pointer;
  transition: ${props => props.disabled ? null : 'all 700ms ease-out'};
  border-radius: 10px;
  margin-left: 30px;

  &:hover {
    ${props => props.disabled ? null : css`
      background-position: left bottom;
      color: #fff;
      box-shadow: 0px 0px 5px #31d1c5;
    `}
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex-wrap: wrap;
  margin: auto;
  flex: 1;

  input {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 5px;  
  }
  
  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    flex: 1;
    font-size: 16px;
    font-weight: bold;
  }
  .errors {
      font-size: 14px;
      color: red;
      width: 100%;
    }
    
  .perecivel{
    margin: 10px;
  }

`