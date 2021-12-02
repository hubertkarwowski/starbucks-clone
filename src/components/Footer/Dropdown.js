import React, { Fragment, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import {
  Accordion,
  AccordionContainer,
  DropdownItem,
  Icons,
  Wrap,
} from "./style";

const Dropdown = () => {
  const [clicked, setClicked] = useState(false);

  const handleToggle = () => {
    setClicked(!clicked);
  };
  return (
    <IconContext.Provider value={{ size: "25px" }}>
      <Accordion>
        <AccordionContainer>
          <Wrap>
            <h2>About Us</h2>
            <span onClick={handleToggle}>
              {clicked ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </Wrap>
          {clicked ? (
            <Fragment>
              <DropdownItem>
                <li>
                  <a href="#">Our Company</a>
                </li>
                <li>
                  <a href="#">Our Coffee</a>
                </li>
                <li>
                  <a href="#">Stories and News</a>
                </li>
                <li>
                  <a href="#">Starbucks Archive</a>
                </li>
                <li>
                  <a href="#">Investor Relations</a>
                </li>
                <li>
                  <a href="#">Customer Service</a>
                </li>
              </DropdownItem>
            </Fragment>
          ) : null}
        </AccordionContainer>
        <AccordionContainer>
          <Wrap onClick={handleToggle}>
            <h2>Careers</h2>
            <span>{clicked ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
          </Wrap>
          {clicked ? (
            <Fragment>
              <DropdownItem>
                <li>
                  <a href="#">Culture and Values</a>
                </li>
                <li>
                  <a href="#">Inclusions, Diversity and Equity</a>
                </li>
                <li>
                  <a href="#">Collage Achivement Plan</a>
                </li>
                <li>
                  <a href="#">Alumni Community</a>
                </li>
                <li>
                  <a href="#">U.S Careers</a>
                </li>
                <li>
                  <a href="#">International Careers</a>
                </li>
              </DropdownItem>
            </Fragment>
          ) : null}
        </AccordionContainer>
        <AccordionContainer>
          <Wrap onClick={handleToggle}>
            <h2>Social Impact</h2>
            <span>{clicked ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
          </Wrap>
          {clicked ? (
            <Fragment>
              <DropdownItem>
                <li>
                  <a href="#">People</a>
                </li>
                <li>
                  <a href="#">Planet</a>
                </li>
                <li>
                  <a href="#">Environmental and Social Impact Reporting</a>
                </li>
              </DropdownItem>
            </Fragment>
          ) : null}
        </AccordionContainer>
        <AccordionContainer>
          <Wrap onClick={handleToggle}>
            <h2>For Business Partners</h2>
            <span>{clicked ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
          </Wrap>
          {clicked ? (
            <Fragment>
              <DropdownItem>
                <li>
                  <a href="#">Landlord Support Center</a>
                </li>
                <li>
                  <a href="#">Suppliers</a>
                </li>
                <li>
                  <a href="#">Corporate Gift Card Sales</a>
                </li>
                <li>
                  <a href="#">Office and Foodservice Coffee</a>
                </li>
              </DropdownItem>
            </Fragment>
          ) : null}
        </AccordionContainer>
        <AccordionContainer>
          <Wrap onClick={handleToggle}>
            <h2>Order and Pickup</h2>
            <span>{clicked ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
          </Wrap>
          {clicked ? (
            <Fragment>
              <DropdownItem>
                <li>
                  <a href="#">Order on the App</a>
                </li>
                <li>
                  <a href="#">Order on the Web</a>
                </li>
                <li>
                  <a href="#">Delivery</a>
                </li>
                <li>
                  <a href="#">Order and Pickup Options</a>
                </li>
                <li>
                  <a href="#">Explore and Find Coffee for Home</a>
                </li>
              </DropdownItem>
            </Fragment>
          ) : null}
        </AccordionContainer>
      </Accordion>
    </IconContext.Provider>
  );
};
export default Dropdown;
