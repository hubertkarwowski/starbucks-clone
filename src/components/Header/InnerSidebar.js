import { useState } from "react";

import { IoIosArrowBack } from "react-icons/io";

import { Menu, StyledSidebar } from "./style";

const InnerSidebar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <StyledSidebar>
      <Menu onClick={handleClick}>
        <IoIosArrowBack />
        Menu
      </Menu>
      <nav>
        <ul>
          <li>
            <a href="#">All products</a>
          </li>
          <li>
            <a href="#">Featured</a>
          </li>
          <li>
            <a href="#">Previous</a>
          </li>
          <li>
            <a href="#">Favorites</a>
          </li>
        </ul>
      </nav>
    </StyledSidebar>
  );
};

export default InnerSidebar;
