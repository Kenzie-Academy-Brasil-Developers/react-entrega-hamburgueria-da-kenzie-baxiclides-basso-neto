import styled from "styled-components";

export const StyledCart = styled.footer`
  margin: 0.4rem auto;
  width: 92%;

  > div {
    max-height: 200px;

    header {
      background-color: var(--brand1);
      width: 100%;
      margin: 0 auto;
      height: 3.5rem;
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
      margin-top: 0.5rem;

      h3 {
        color: #fff;
        margin-top: 1rem;
        margin-left: 1rem;
        padding-top: 1rem;
        align-self: center;
      }
    }

    > ul {
      margin: 0 auto;
      margin-top: 0.5rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      height: 200px;
      overflow-y: scroll;

      li {
        display: flex;
        justify-content: space-between;
        width: 100%;
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
          gap: 5%;

          h3 {
            width: 80px;
            color: var(--gray);
            font-size: 1.1rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          h4 {
            color: var(--brand1);
          }

          h5 {
            color: var(--gray2);
            font-weight: 200;
          }
        }
      }
      h3 {
        border-top: px solid var(--gray3);

        display: flex;
        justify-content: space-between;
        color: var(--gray1);
        font-size: 0.9rem;

        span {
          color: var(--gray2);
          font-size: 0.9rem;
        }
      }

      button {
        font-size: 0.75rem;
        align-self: flex-start;

        background-color: var(--gray4);
      }
    }
  }

  @media (min-width: 769px) {
    width: 30%;
    margin: 0;
    margin-top: 0.5rem;
    margin-right: 0.2rem;
    margin-bottom: 2rem;

    > div {
      display: flex;
      flex-direction: column;
      min-height: 100%;

      header > h3 {
        padding-top: 0;
      }

      > ul {
        height: auto;
      }
      button {
        margin-top: 0.1rem;
        margin-right: 0.5rem;
        width: 100x;
      }
    }
  }
`;

export const StyledDivCartEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 2rem;
  padding-top: 2rem;
  padding-bottom: 1rem;
  width: 100%;
  background-color: var(--gray4);

  h4 {
    color: var(--gray2);
    margin-top: 0.5rem;
    font-weight: 300;
  }
`;

export const StyledButton = styled.button`
  background-color: var(--gray3);
  color: var(--gray2);
  width: 100%;
  padding: 10px 20px;
  border-radius: 8px;
  margin-top: 0.5rem;
  margin-bottom: 1rem;

  :hover {
    background-color: var(--brand2);
    color: #fff;
    font-weight: bolder;
    border: 1px solid var(--brand1);
  }
`;
