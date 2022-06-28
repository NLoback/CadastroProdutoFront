import styled from "styled-components"

export const Wrapper = styled.div`
  background-color: green;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  padding: 60px;
  justify-content: center;
  margin: 0 auto;  
 
  
  input {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px;  
  }
  
  label {
    align-self: flex-end;
    width: 100%;
    text-align: right;
    margin: 5px; 
  }

  .formulario{
  display: flex;
  justify-content: space-between;
  margin: 5px;
  }

  .titulo{
    font-size: 20px;
    text-align: center;
    margin-bottom: 30px;
    width: 100%;
  }


  button {
  width: 150px;
  height: 40px;
  background: linear-gradient(to right, black 50%, #ffffff 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  border: solid 1px #31d1c5;
  font-size: 14px;
  cursor: pointer;
  transition: all 900ms ease-out;
  margin: 20px;
  }
  button:hover {
  background-position: left bottom;
  color: #fff;
  box-shadow: 0px 0px 5px #31d1c5;
  }
  .Button{
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .Link {
  width: 150px;
  height: 40px;
  background: linear-gradient(to right, black 50%, #ffffff 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  border: solid 1px #31d1c5;
  text-decoration: none;
  color: black;
  font-weight: 580;
  font-size: 14px;

    
  cursor: pointer;
  transition: all 900ms ease-out;
  margin: 20px;
  }
  .Link:hover {
  background-position: left bottom;
  color: #fff;
  box-shadow: 0px 0px 5px #31d1c5;
  }
  .Link{
  display: flex;
  justify-content: center;
  align-items: center;
  }
`

