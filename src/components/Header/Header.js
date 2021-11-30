import { Fragment, useState } from "react";

import logo from "../../assets/starbucks-coffee-logo-vector.png";
import { BiMenu } from "react-icons/bi";
import { MdClose, MdLocationOn } from "react-icons/md";

import Sidebar from "./Sidebar";

import { Hamburger, LeftDiv, RightDiv, Wrapper } from "./style";
import { Button } from "../../button";
import BottomHeading from "./BottomHeading";
const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <Wrapper>
        <LeftDiv>
          <img src={logo} alt="logo"></img>
          <nav>
            <ul>
              <li>
                <a href="#">MENU</a>
              </li>
              <li>
                <a href="#">REWARDS</a>
              </li>
              <li>
                <a href="#">GIFT CARDS</a>
              </li>
            </ul>
          </nav>
        </LeftDiv>
        <RightDiv>
          <a href="#">
            <MdLocationOn /> Find a store
          </a>
          <Button>Sign in</Button>
          <Button inverted>Join now</Button>
        </RightDiv>
        <Hamburger>
          {open ? (
            <MdClose onClick={handleClick} />
          ) : (
            <BiMenu onClick={handleClick} />
          )}
        </Hamburger>
      </Wrapper>
      <BottomHeading />
      {open ? <Sidebar /> : null}
    </Fragment>
  );
};
export default Header;
