import styled from "styled-components";

export const StyledHeader = styled.header`
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--gray4);
  padding: 1rem;

  div {
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
  }

  h1 {
    text-align: center;
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--gray1);
    margin-top: 1.2rem;
    margin-bottom: 1.1rem;

    span {
      font-size: 1.4rem;
      color: var(--brand3);
    }
  }

  form {
    position: relative;
    width: 351px;
    margin: 0 auto;

    input {
      width: 100%;
      width: 350px;
      height: 3.75rem;
      border: 1px solid var(--gray3);
      border-radius: 8px;
      padding-left: 1rem;
      font-size: 1rem;
      color: var(--gray2);
    }

    input::placeholder {
      color: var(--gray3);
      padding-left: 1rem;
    }

    button {
      position: absolute;
      width: 7rem;
      height: 2.4rem;
      top: 11px;
      right: 10px;
      border-radius: 8px;
      background-color: var(--brand1);
      color: #fff;
      margin-bottom: 1rem;
    }
  }

  @media (min-width: 769px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    form {
      margin-right: 0;
      align-self: center;
    }
  }
`;
