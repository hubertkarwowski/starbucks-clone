import React, { useState } from "react";
import { Item1, Item2 } from "./Items";
import { Heading, Slider, Wrapper } from "./style";

const Favorites = () => {
  const [item, setItem] = useState(<Item1 />);

  return (
    <Wrapper>
      <Heading>
        <h2>Get your favorites for free</h2>
        <ul>
          <li>25</li>
          <li>50</li>
          <li>150</li>
          <li>200</li>
          <li>400</li>
        </ul>
        <Slider>{item}</Slider>
      </Heading>
    </Wrapper>
  );
};

export default Favorites;
