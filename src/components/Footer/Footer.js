import React from "react";
import {
  BsSpotify,
  BsFacebook,
  BsPinterest,
  BsInstagram,
  BsYoutube,
  BsTwitter,
} from "react-icons/bs";
import Navigations from "./Navigations";
import { Icons, Navigation, Wrapper } from "./style";
function Footer() {
  return (
    <Wrapper>
      <Navigations />
      <Icons>
        <li>
          <BsSpotify />
        </li>
        <li>
          <BsFacebook />
        </li>
        <li>
          <BsPinterest />
        </li>
        <li>
          <BsInstagram />
        </li>
        <li>
          <BsYoutube />
        </li>
        <li>
          <BsTwitter />
        </li>
      </Icons>
      <Navigation>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Terms of Use</a>
        </li>
        <li>
          <a href="#">CA Supply Chain Act</a>
        </li>
        <li>
          <a href="#">Cookie Preferences</a>
        </li>
      </Navigation>
      <p>© 2021 Starbucks Coffee Company. All rights reserved.</p>
    </Wrapper>
  );
}

export default Footer;
