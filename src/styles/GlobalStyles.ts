import { createGlobalStyle } from "styled-components"


export const GlobalStyles = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'nunito', sans-serif;

        /* Chrome, Safari, Edge, Opera /
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
}

/ Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
    }
    html, body, #root {
        height: 100%;
        background-color: #f5f5f2;
        max-width: 100%;
    }
    button {
        background-color: #31d1c5;
        border: none;
        outline: none;
        cursor: pointer;
        text-decoration: none;
    }
    a {
        
        text-decoration: none;
    }

`