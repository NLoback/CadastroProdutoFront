import styled from "styled-components"

export const Table = styled.table`
  display: table;
  width: 90%;
  height: 100%;
  border-color: #ccc;
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
  table-layout: fixed;
  font-size: 16px;
  line-height: 1.4;
  color: #333;
  text-align: left;
  text-align: center;
  font-family: Montserrat, Arial, sans-serif;
  background:#fafafa ;
  margin: 0 auto;
  
  tr:nth-child(even) {
    background:lightgray;
  }
 
  tr{
    align-items: center;
  }
  
  .DeleteButton{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color:red;
    border:none;
    margin:0 auto;
    background:transparent;
    font-size:16px;
    }
  .EditButton{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color:green;
    border:none;
    margin:0 auto;
    background:transparent;
    font-size:16px;
    }
  th {
    background-color: #ccc;
    }  
  .cancel{
    align-items: center;
    width:50px;
    }
  .quantidade{
      width:80px;
    }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 100%;

  #divBusca{
    display: flex;
    margin-left: 70px;
    justify-content: center;  
    align-items: center;  
    margin-bottom: 10px;
    background-color:#E0EEEE;
    border:solid 2px #5F9EA0;
    border-radius:10px;
    width:300px;
    height:32px;
  }
  input{
    float:left;
    background-color:transparent;
    padding-left:5px;
    font-size:18px;
    border:none;
    height:32px;
    width:300px;
    border-radius:10px;
  }
  .Buttons{
    display:flex;
    flex-direction:row;
  }
`


