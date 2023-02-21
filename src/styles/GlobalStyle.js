import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }
    button{
        cursor: pointer;
        border: none;
    }

    :root{
        --brand1: #27AE60;
        --brand2: #93D7AF;
        --brand3: #EB5757;

        --gray1: #333333;
        --gray2: #828282;
        --gray3: #E0E0E0;
        --gray4: #F5F5F5;
        
}
`;
