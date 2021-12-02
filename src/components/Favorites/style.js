import styled from "styled-components";

export const Wrapper = styled.section`
  background: #f1f8f5;
  padding-bottom: 8rem;
`;
export const Heading = styled.div`
  text-align: center;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 12%), 0 0 2px 0 rgb(0 0 0 / 24%);
  h2 {
    font-size: 1.4rem;
    padding: 2rem 0;
  }
  ul {
    display: flex;
    justify-content: space-around;
    padding: 0 10%;

    li {
      border-bottom: 5px solid green;
      cursor: pointer;
      &::after {
        content: "★";
        color: #cba258;
      }
    }
    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  }
`;
export const Slider = styled.div`
  background: ${({ theme }) => theme.backgroundFavorites};
  padding: 3rem 0;
  display: flex;
  flex-direction: column;

  img {
    max-height: 400px;
  }
  div {
    h2 {
      font-size: 1.4rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: left;
    img {
      max-height: 300px;
    }
    div {
      h2 {
        font-size: 2rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
`;
