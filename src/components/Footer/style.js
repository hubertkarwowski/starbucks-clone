import styled from "styled-components";

export const Wrapper = styled.footer`
  z-index: 10;
  padding: 2rem 1rem;
  p {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.fontColorPrimary};
  }
  box-shadow: 0 -1px 3px rgb(0 0 0 / 10%), 0 -2px 2px rgb(0 0 0 / 6%),
    0 0 2px rgb(0 0 0 / 7%);
`;

export const Icons = styled.ul`
  display: flex;
  font-size: 2rem;
  gap: 1rem;
`;

export const Navigation = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0;
  a {
    color: ${({ theme }) => theme.fontColorPrimary};
    transition: all 0.2s ease;
    &:hover {
      color: ${({ theme }) => theme.fontColorHover};
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
    li {
      &:after {
        content: "|";
        margin-left: 1rem;
      }
    }
  }
`;

export const Nav = styled.nav`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    gap: 1rem;
    padding: 2rem 1rem;
  }
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 200px;
  font-size: 1.2rem;
  a {
    color: ${({ theme }) => theme.fontColorSecondary};
    transition: all 0.2s ease;
    &:hover {
      color: ${({ theme }) => theme.fontColorPrimary};
    }
  }
`;
