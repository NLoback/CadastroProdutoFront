import styled, { css } from "styled-components";



export const Modal = styled.div` 
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.8);
`

export const ModalContainer = styled.div`
  position: relative;
  top: 50%;
  display: flex;
  flex-direction: column;
  width: 450px;
  border-radius: 10px;
  margin: auto;
  background: #fff;
  
  `

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

    .Title{
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      background: #500534;
      width: 450px;
      height: 50px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      color: white;
    }

    .CancelButton{
     width: 100px;
      height: 30px;
      background: linear-gradient(to right, purple 50%, #fff4 50%);
      background-size: 200% 100%;
      border: none;
      border-radius: 4px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
      cursor: pointer;
      transition: all 900ms ease-out;
    }

    .CancelButton:hover{
      background-position: left bottom;
      color: white;
      box-shadow: 0px 0px 5px #fff;
    }

    
      .ConfirmButton{
      width: 100px;
      height: 30px;
      background: linear-gradient(to right, #fff4 50%, #fff6 50%);
      background-size: 200% 100%;
      border: none;
      border-radius: 4px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
      cursor: pointer;
      transition: all 900ms ease-out;
    }

    .ConfirmButton:hover {
      background-position: left bottom;
      color: pink;
      box-shadow: 0px 0px 5px #fff;
    }

      

    .buttons {
      width: 80%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      margin: auto;
      
    }
  `

