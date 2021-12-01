import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  input {
    border-radius: 12px;
    padding: 1rem;
    border-color: ${({ theme }) => theme.fontColorSecondary};
    max-width: 400px;
  }
  div {
    max-width: 400px;
    Button {
      float: right;
    }
  }
  span {
    color: ${({ theme }) => theme.fontColorHover};
    text-decoration: underline;
  }
  @media (min-width: 768px) {
    width: 600px;
    margin: 0 auto;
  }
  @media (min-width: 1024px) {
    h2 {
      font-size: 3rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;
