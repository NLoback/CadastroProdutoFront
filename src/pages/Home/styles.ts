import styled from "styled-components";
import fundo from "./img/f3.jpg";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image:url(${fundo});
  object-fit: contain;
  background-size: cover;
  background-repeat: no-repeat;

`
export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  width: 1200px;
  justify-content: space-between;
  align-items: center;
  margin: 10 , 10, 10, 10;
  padding: 20px;
  font-size: 20px;
  color: white;
  font-family:'nunito', sans-serif;
  background-color: #1c4078;
  box-shadow: 0px 2px 10px #000;
  border-radius: 10px;
  margin-top: 10px;

  button {
    background: #fff;
    border: none;
    border-radius: 5px;
    width: 100px;
    height: 40px;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    color: black;
    cursor: pointer;
    transition: all 0.8s;
    &:hover {
      background: #e9b61a;
      color: black;
    }
`