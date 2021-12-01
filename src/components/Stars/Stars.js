import React from "react";
import Row from "./Row";
import img1 from "../../assets/1A.png";
import img2 from "../../assets/1B.png";
import img3 from "../../assets/2A.png";
import img4 from "../../assets/2B.png";
import img5 from "../../assets/3A.png";
import img6 from "../../assets/transparent.png";
import { Text, Wrap, Wrapper } from "./style";

const Stars = () => {
  return (
    <Wrapper>
      <Text>
        <h2>Cash or card, you earn Stars</h2>
        <p>
          No matter how you pay, you can earn Stars with your morning coffee.
          Those Stars add up to (really delicious) Rewards.
        </p>
      </Text>
      <Wrap>
        <Row
          title="1★ per dollar"
          subtitle="Pay as you go"
          heading="Scan and pay separately"
          subheading="Use cash or credit/debit card at the register."
          img={img1}
          heading2="Scan and pay separately"
          subheading2="Use cash or credit/debit card at the register."
          img2={img2}
        />
        <hr />
        <Row
          title="2★ per dollar"
          subtitle="Add funds in the app"
          heading="Preload"
          subheading="To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app."
          img={img3}
          heading2="Register your gift card"
          subheading2="Then use it to pay through the app. You can even consolidate balances from multiple cards in one place."
          img2={img4}
        />
        <hr />
        <Row
          title="Up to 3★ per dollar"
          subtitle="With Starbucks® Rewards Visa® Card"
          heading="
        Earn Stars even faster"
          subheading="Earn Stars on all purchases you make with our 
        credit card
        opens in new window in and outside of Starbucks. Earn 1 Star per $1 when you digitally preload your Starbucks Card with your Starbucks® Rewards Visa® Card, and earn 2 Stars per $1 when you pay with that preloaded Starbucks Card."
          img={img5}
          img2={img6}
        />
      </Wrap>
    </Wrapper>
  );
};

export default Stars;
