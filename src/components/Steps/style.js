import styled from "styled-components";

export const Heading = styled.div`
  text-align: center;
  padding-top: 8rem;
  p {
    margin-top: 2rem;
  }
`;
export const Wrapper = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 8rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const Step = styled.div`
  text-align: left;
  display: flex;
  gap: 1rem;
  padding: 1rem;

  div {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 768px) {
    flex-direction: column;
    text-align: center;
    margin: auto;
    div {
      width: 70%;
      margin: 0 auto;
    }
  }
`;

export const Circle = styled.div`
  img {
    height: 50px;
    width: 50px;
    @media (min-width: 768px) {
      display: flex;
      margin: 0 auto;
    }
  }
`;
