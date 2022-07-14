import styled from "styled-components"
import login from "./img-background/login.jpg"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image:url(${login});
  background-color: green;
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff4;
  border-radius: 10px;
  padding: 10px;

  .register{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  
  .titulo{
    font-size: 30px;
    font-weight: bold;
    align-self: center;
    color: #fff;
  }

  .container-input{
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  div{
    display: flex;
    flex-direction: column;
    margin: 4px;

    .errors {
      font-size: 14px;
      color: red;
      width: 100%;
     }

    input{
      border: 1px solid #ccc1;
      border-radius: 10px;
      padding: 10px;
      width: 400px;
      background-color: #fff7;

      &:focus {
        outline: none;
      }
    }
  }

  .formulario{
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
  }

  label{
    display: flex;
    justify-content: flex-start;
    font-size: 15px;
    font-weight: bold;
    margin-right: 10px;
    margin: 6px;
    border-radius: 10px;  
    color: #fff
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    width: 150px;
    height: 40px;
    background: linear-gradient(to right, #fff4 50%, #fff6 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    font-size: 14px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 900ms ease-out;
    margin: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    color: #3b3b3b;
    font-weight: bold;
  }

  button:hover {
    background-position: left bottom;
    color: #7d3e81;
    box-shadow: 0px 0px 5px green;
  }

  .Button{
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .Link {
    width: 150px;
    height: 40px;
    background: linear-gradient(to right, #fff4 50%, #fff6 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    color: #3b3b3b;
    font-weight: 580;
    font-size: 14px;
    cursor: pointer;
    transition: all 900ms ease-out;
    margin: 20px;
  }
  .Link:hover {
    background-position: left bottom;
    color: #7d3e81;
    box-shadow: 0px 0px 5px red;
  }
  .Link{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  
`




