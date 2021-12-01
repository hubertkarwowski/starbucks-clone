import styled from "styled-components";

export const Wrapper = styled.section`
  background: ${({ theme }) => theme.backgroundStars};
  padding: 4rem 0;
`;
export const Text = styled.div`
  text-align: center;
  p {
    margin: 1rem 0;
  }
`;
export const Wrap = styled.section``;
export const RowStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const RowText = styled.div`
  padding: 3rem 2rem;
  @media (min-width: 1024px) {
    width: 250px;
  }
`;

export const ColumnStyled = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem 0;
  @media (min-width: 768px) {
    width: 400px;
  }
`;
export const ColumnImage = styled.div`
  img {
    height: 150px;
  }
`;
export const ColumnText = styled.div``;
export const RowWrapper = styled.div`
  @media (min-width: 1024px) {
    display: flex;
  }
`;
