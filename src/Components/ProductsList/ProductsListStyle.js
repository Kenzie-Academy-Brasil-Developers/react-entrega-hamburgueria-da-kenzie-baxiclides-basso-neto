import styled from "styled-components";

export const StyledMain = styled.main`
  ul {
    display: flex;
    padding: 15px;
    overflow-x: scroll;
  }

  li {
    border: 1px solid var(--gray3);
  }

  img {
    background-color: var(--gray4);
    width: 200px;
    height: 150px;
    padding: 20px;
  }

  h3 {
    max-width: 70%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 0.7rem;
    margin-left: 1rem;
  }

  h4 {
    margin-top: 0.7rem;
    margin-left: 1rem;
    color: var(--brand1);
  }

  h5 {
    margin-top: 0.7rem;
    margin-left: 1rem;
    color: var(--gray2);
    font-weight: 200;
  }

  button {
    margin-top: 0.7rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
    padding: 10px 20px;
    border-radius: 8px;
    background-color: var(--brand1);
    color: #fff;
  }

  @media (min-width: 769px) {
    max-width: 60%;

    ul {
      flex-wrap: wrap;
      height: auto;
      padding-left: 0;
    }
  }
`;
