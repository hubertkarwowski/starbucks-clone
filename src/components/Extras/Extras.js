import React, { Fragment } from "react";
import Row from "./Row";
import img1 from "../../assets/icon1.png";
import img2 from "../../assets/icon2.png";
import img3 from "../../assets/icon3.png";
import { Heading, Wrapper } from "./style";

const Extras = () => {
  return (
    <Fragment>
      <Heading>
        <h2>Endless Extras</h2>
        <p>
          Joining Starbucks® Rewards means unlocking access to exclusive
          benefits. Say hello to easy ordering, tasty Rewards and—yes, free
          coffee.
        </p>
      </Heading>
      <Wrapper>
        <Row
          img={img1}
          text="Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills."
          heading="Fun freebies"
        />
        <Row
          img={img2}
          text="Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores."
          heading="Order & pay ahead"
        />
        <Row
          img={img3}
          text="Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games."
          heading="
      Get to free faster"
        />
      </Wrapper>
    </Fragment>
  );
};

export default Extras;
