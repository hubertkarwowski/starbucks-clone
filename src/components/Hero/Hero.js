import React from "react";
import { Button } from "../../button";
import { HeroContainer } from "./style";

const Hero = () => {
  return (
    <HeroContainer>
      <div>
        <h2>FREE COFFEE IS A TAP AWAY</h2>
        <p>Join now to start earning Rewards.</p>
        <Button green>Join in the app</Button>
        <p>Or join online</p>
      </div>
    </HeroContainer>
  );
};

export default Hero;
