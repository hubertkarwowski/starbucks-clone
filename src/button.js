import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  border-radius: 50px;
  border: 1px solid black;
  font-weight: 600;
  line-height: 1.2;
  padding: 10px 19px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 1rem;
  ${(props) => {
    if (props.inverted) {
      return `
        background: #000;
        color: #fff;
        &:hover{
          background: #4C4C4C;
          
        }
    `;
    } else if (props.green) {
      return `
        background: #00754a;
        color: #fff;
        border: 1px solid #158159;
        &:hover{
          background: #158159;
         
        }
    `;
    } else {
      return `
        background:  #fff;
        color: #1F1F1F;
        &:hover{
          background: #F0F0F0;
          
        }
    `;
    }
  }}
`;
