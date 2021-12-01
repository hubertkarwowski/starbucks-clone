import React, { Fragment } from "react";
import { Circle, Heading, Step, Wrapper } from "./style";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";

const Steps = () => {
  return (
    <Fragment>
      <Heading>
        <h2>Getting started is easy</h2>
        <p>Earn Stars and get rewarded in a few easy steps.</p>
      </Heading>
      <Wrapper>
        <Step>
          <Circle>
            <img src={img1} alt="1" />
          </Circle>
          <div>
            <h2>Create an account</h2>
            <p>
              To get started, join now. You can also join in the app to get
              access to the full range of Starbucks® Rewards benefits.
            </p>
          </div>
        </Step>
        <Step>
          <Circle>
            <img src={img2} alt="2" />
          </Circle>
          <div>
            <h2>Order and pay how you’d like</h2>
            <p>
              Use cash, credit/debit card or save some time and pay right
              through the app. You’ll collect Stars all ways. Learn how
            </p>
          </div>
        </Step>
        <Step>
          <Circle>
            <img src={img3} alt="3" />
          </Circle>
          <div>
            <h2>Earn Stars, get Rewards</h2>
            <p>
              As you earn Stars, you can redeem them for Rewards—like free food,
              drinks, and more. Start redeeming with as little as 25 Stars!
            </p>
          </div>
        </Step>
      </Wrapper>
    </Fragment>
  );
};

export default Steps;
