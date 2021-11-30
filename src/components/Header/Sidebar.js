import { Fragment, useState } from "react";

import { Button } from "../../button";
import { ButtonSection, Line, StyledSidebar } from "./style";

import { MdLocationOn } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import InnerSidebar from "./InnerSidebar";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Fragment>
      {open ? <InnerSidebar /> : null}
      <StyledSidebar>
        <nav>
          <ul>
            <li>
              <a href="#" onClick={handleClick}>
                Menu <IoIosArrowForward />
              </a>
            </li>
            <li>
              <a href="#">Rewards</a>
            </li>
            <li>
              <a href="#">Gift Cards</a>
            </li>
          </ul>
          <Line />
          <ButtonSection>
            <Button>Sign in</Button>
            <Button inverted>Join now</Button>
            <div>
              <MdLocationOn />
              Find a store
            </div>
          </ButtonSection>
        </nav>
      </StyledSidebar>
    </Fragment>
  );
};

export default Sidebar;
