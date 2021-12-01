import React from "react";
import { ColumnImage, ColumnStyled, ColumnText } from "./style";

const Column = ({ img, heading, subheading }) => {
  return (
    <ColumnStyled>
      <ColumnImage>
        <img src={img} alt="img" />
      </ColumnImage>
      <ColumnText>
        <h2>{heading}</h2>
        <p>{subheading}</p>
      </ColumnText>
    </ColumnStyled>
  );
};

export default Column;
