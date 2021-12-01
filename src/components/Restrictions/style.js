import styled from "styled-components";

export const Wrapper = styled.section`
  background: ${({ theme }) => theme.backgroundTerms};
  padding: 2rem 1rem;
  p {
    margin: 2rem 0;
  }
`;

export const RestrictionsList = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
`;
export const Restriction = styled.div`
  h2 {
    font-size: 1.3rem;
  }
  p {
    color: ${({ theme }) => theme.fontColorSecondary};
  }
  span {
    color: ${({ theme }) => theme.fontColorHover};
    text-decoration: underline;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    width: 45%;
  }
`;
