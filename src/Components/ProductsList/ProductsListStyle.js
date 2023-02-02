import styled from "styled-components";

export const StyledMain = styled.main`
    width: 100%;
    max-width: 1200px;

    ul{
        display: flex;
        gap: 10px;
        padding: 15px;
        overflow-x: scroll;
    }

    li{
        border: 1px solid var(--gray3);
    }

    img{
        background-color: var(--gray4);
        width: 200px;
        height: 150px;
        padding: 20px;
    }

    h3{
        margin-top: .7rem;
        margin-left: 1rem;
    }

    h4{
        margin-top: .7rem;
        margin-left: 1rem;
        color: var(--brand1);
    }

    h5{
        margin-top: .7rem;
        margin-left: 1rem;
        color: var(--gray2);
        font-weight: 200;
    }

    button{
        margin-top: .7rem;
        margin-left: 1rem;
        margin-bottom: 1rem;
        padding: 10px 20px;
        border-radius: 8px;
        background-color: var(--brand1);
        color: #fff;
    }
    `
