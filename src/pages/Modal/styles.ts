import styled from "styled-components";


export const Modal = styled.div` 
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.8);
`

export const ModalContainer = styled.div`
  position: relative;
  top: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 500px;
  padding: 5px;
  background: #fff;
  border-radius: 10px;
  margin: auto;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

`

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:30px;
`

export const Buttons = styled.div` 
  display: flex;
  justify-content: space-between;
  width: 80%;
`

export const ButtonClose = styled.button`
  width: 80px;
  height: 40px;
  background: linear-gradient(to right, red 50%, #ffffff 50%);
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
  background: linear-gradient(to right, green 50%, #ffffff 50%);
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