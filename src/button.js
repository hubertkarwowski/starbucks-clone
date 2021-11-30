import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  border-radius: 50px;
  border: 1px solid black;
  font-weight: 600;
  line-height: 1.2;
  padding: 7px 16px;
  text-align: center;
  text-decoration: none;
  ${(props) => {
    if (props.inverted) {
      return `
        background: black;
        color: #fff;
    `;
    } else if (props.green) {
      return `
        background: #158159;
        color: #fff;
        border: 1px solid #158159;
    `;
    } else {
      return `
        background:  #fff;
        color: #1F1F1F;
    `;
    }
  }}
`;
