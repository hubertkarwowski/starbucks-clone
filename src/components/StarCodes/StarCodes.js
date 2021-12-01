import React from "react";
import { Button } from "../../button";
import { Wrapper } from "./style";

const StarCodes = () => {
  return (
    <Wrapper>
      <h2>Star Codes</h2>
      <p>
        Yesssss. You’ve got Stars in your hand. Enter your code here and we’ll
        add Stars to your account.
      </p>
      <input type="text" placeholder="Enter your Star Code"></input>
      <div>
        <Button>Submit</Button>
      </div>

      <p>Have a receipt but don't have a code?</p>
      <p>
        Go to <span>starbucks-stars.com</span> to upload your receipt and
        collect your Stars.
      </p>
      <h2>Questions?</h2>
      <p>
        We want to help in any way we can. You can ask your barista anytime or
        we’ve answered the most commonly asked questions right over here.
      </p>
    </Wrapper>
  );
};

export default StarCodes;
