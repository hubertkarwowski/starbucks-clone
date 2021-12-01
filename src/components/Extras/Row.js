import React from "react";
import { Container, Text } from "./style";

const Row = ({ img, heading, text }) => {
  return (
    <Container>
      <div>
        <img src={img} alt="img" />
      </div>
      <Text>
        <h2>{heading}</h2>
        <p>{text}</p>
        <p>
          <a href="#">Learn more</a>
        </p>
      </Text>
    </Container>
  );
};

export default Row;
