import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 5rem 0;
  @media (min-width: 768px) {
    display: flex;
    gap: 1rem;
    text-align: center;
  }
`;

export const Heading = styled.div`
  width: 70%;
  margin: 0 auto;
  text-align: center;
  p {
    margin-top: 1rem;
  }
  @media (min-width: 768px) {
    width: 50%;
    h2 {
      font-size: 2rem;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  img {
    height: 100px;
  }
  @media (min-width: 768px) {
    flex-direction: column;
    width: 25%;
    margin: 0 auto;
  }
`;
export const Text = styled.div`
  h2 {
    font-size: 1.3rem;
  }
  p {
    margin: 1rem 0;
    a {
      color: ${({ theme }) => theme.fontColorHover};
      text-decoration: underline;
    }
  }
`;
