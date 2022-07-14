import styled from "styled-components";
import home from "./img/home.png";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(${home});
  background-size: cover;

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
  background-color: #500534 ;
  box-shadow: 0px 2px 10px #000;
  border-radius: 10px;
  margin-top: 10px;

  button {
    background: #fff5;
    border: none;
    border-radius: 5px;
    width: 100px;
    height: 40px;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    color: #fff;
    cursor: pointer;
    transition: all 0.8s;
    &:hover {
      background: #e9b61a;
      color: black;
    }
`