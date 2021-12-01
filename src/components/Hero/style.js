import styled from "styled-components";
import hero from "../../assets/hero.png";

export const HeroContainer = styled.section`
  padding: 1rem 0;
  background-image: url(${hero});
  background-color: rgb(212, 233, 226);
  background-position: center;
  background-size: cover;
  min-height: 35rem;
  div {
    text-align: center;

    h2 {
      width: 53%;
      margin: 0 auto;
    }
    p {
      margin: 2rem 0;
      &:last-child {
        text-decoration: underline;
      }
    }
  }
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    min-height: 45rem;
    div {
      padding-left: 10%;
      width: 35%;
      text-align: left;
      h2 {
        font-size: 2.6rem;
        width: 100%;
      }
      p {
        font-size: 1.5rem;
      }
    }
  }
`;
