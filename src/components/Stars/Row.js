import React, { Fragment } from "react";
import Column from "./Column";
import { RowColumns, RowStyled, RowText, RowWrapper } from "./style";

const Row = ({
  title,
  subtitle,
  heading,
  subheading,
  img,
  heading2,
  subheading2,
  img2,
}) => {
  return (
    <RowWrapper>
      <RowText>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </RowText>
      <RowStyled>
        <Column heading={heading} subheading={subheading} img={img} />
        <Column heading={heading2} subheading={subheading2} img={img2} />
      </RowStyled>
    </RowWrapper>
  );
};

export default Row;
