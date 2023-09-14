import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
  return (
    <div className="h-wrapper">
      <div className="h-container flexCenter paddings">
        <Link to="/home">
          <img src="./logo.png" alt="Logo" width={100} />
        </Link>
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <Link to="./home">Home</Link>
            <Link to="./residencies">Residencies</Link>
            <Link to="./value">Our Value</Link>
            <Link to="./contact">Contact US</Link>
            <Link to="./getstarted">Get Started</Link>

            <button className="button">
              <Link to="/contact">Contact</Link>
            </button>
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </div>
  );
};

export default Header;
