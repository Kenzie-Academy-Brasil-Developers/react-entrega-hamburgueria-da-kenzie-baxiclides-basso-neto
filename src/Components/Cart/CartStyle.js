import styled from "styled-components";

export const StyledCart = styled.footer`
  div {
    display: flex;
    flex-direction: column;
  }

  header {
    background-color: var(--brand1);
    width: 90vw;
    margin: 0 auto;
    height: 3.5rem;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    margin-top: 0.5rem;

    h3{
      color: #fff;
      margin-top: 1rem;
      margin-left: 1rem;
    }
  }

  ul {
    margin: 0 auto;
    margin-top: 0.5rem;
    width: 90vw;
    display: flex;
    flex-direction: column;
    max-height: 200px;
    overflow-y: scroll;
    border-bottom: 2px solid var(--gray3);
  }

  li {
    display: flex;
    width: 90vw;
    margin: 0.5rem auto;
    margin-bottom: 1rem;

    img {
      width: 70px;
      height: 70px;
      background-color: var(--gray3);
      border-radius: 8px;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-left: 1rem;
      gap: 0.5rem;
      min-width: 130px;

      h3 {
        color: var(--gray1);
        font-size: 1.1rem;
      }
      h4{
        color: var(--brand1);
      }

      h5{
        color: var(--gray2);
        font-weight: 200;
      }

    }
      button{
        font-size: .75rem ;
        align-self: flex-start;
        margin-left: 50px;
        background-color: var(--gray4);
      }
  }
`;

export const StyledDivCartEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 90vw;

  h4 {
    color: var(--gray2);
    margin-top: 0.5rem;
    font-weight: 300;
  }
`;
