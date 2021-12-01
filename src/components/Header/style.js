import styled from "styled-components";

export const Wrapper = styled.header`
  position: relative;
  width: 100%;
  font-size: 1.2rem;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 6%),
    0 0 2px rgb(0 0 0 / 7%);
  a {
    color: ${({ theme }) => theme.fontColorPrimary};
    transition: all 0.2s ease;
    &:hover {
      color: ${({ theme }) => theme.fontColorHover};
    }
  }

  img {
    display: inline-block;
    height: 32px;
    @media (min-width: 375px) {
      height: 40px;
      padding-right: 1rem;
    }
    @media (min-width: 768px) {
      height: 50px;
    }
    @media (min-width: 1024px) {
      height: 64px;
    }
  }
  @media (min-width: 768px) {
    padding: 1rem 3%;
  }
`;

export const StyledSidebar = styled.section`
  z-index: 100;
  float: right;
  height: 93vh;
  width: 80%;
  nav {
    padding: 3rem 1rem;
    ul {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      font-size: 19px;
      a {
        color: ${({ theme }) => theme.fontColorPrimary};
        transition: all 0.2s ease;
        &:hover {
          color: ${({ theme }) => theme.fontColorHover};
        }
        svg {
          float: right;
        }
      }
    }
  }
`;
export const ButtonSection = styled.div`
  margin-top: 2rem;
  Button,
  div {
    margin-left: 1rem;
  }
  div {
    margin-top: 1rem;
  }
  svg {
    font-size: 2rem;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background: #e5e5e5;
  margin: 2rem auto;
`;

export const Menu = styled.div`
  padding: 1rem;
  text-align: center;
  font-size: 1.5rem;
  background: #f9f9f9;
  svg {
    float: left;
  }
`;

export const LeftDiv = styled.div`
  display: flex;
  align-items: center;
  nav {
    display: none;
    @media (min-width: 768px) {
      display: inline-block;
      ul {
        display: flex;
        gap: 1rem;
      }
    }
  }
`;

export const RightDiv = styled.div`
  font-size: 1rem;
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: flex-end;
  }
`;

export const Hamburger = styled.div`
  svg {
    font-size: 2rem;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export const StyledHeading = styled.div`
  background: ${({ theme }) => theme.darkGreen};
  align-items: center;
  color: #fff;
  font-size: 10px;
  display: flex;
  justify-content: space-between;
  padding: 0.8rem;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 12%), 0 0 2px 0 rgb(0 0 0 / 24%);
  Button {
    @media (min-width: 768px) {
      display: none;
    }
  }
  h2 {
    margin-left: 10%;
  }
`;
