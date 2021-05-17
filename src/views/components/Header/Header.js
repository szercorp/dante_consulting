import { useState } from "react";
import useDocumentScrollThrottled from "../../../libs/useDocumentScrollThrottled";
import Logo from "assets/images/logos/Logo.svg";
import BurgerMenuIcon from "assets/images/Burger-menu-icon.svg";
import "./Header.css";

const Header = ({ showSideBar }) => {
  const [hideHeader, setHideHeader] = useState(false);

  const MINIMUM_SCROLL = 100;
  const TIMEOUT_DELAY = 25;

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setTimeout(() => {
      setHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const hiddenStyle = hideHeader ? "hidden" : "";

  return (
    <header className={`header-container ${hiddenStyle}`}>
      <div className="logo-container">
        <img src={Logo} className="logo-image" alt="logo" />
      </div>
      <ul className="menuItems-container">
        <li className="menu-item">
          <a className="menuItem-link" href="#about">
            About
          </a>
        </li>
        <li className="menu-item">
          <a className="menuItem-link" href="#services">
            Services
          </a>
        </li>
        <li className="menu-item">
          <a className="menuItem-link" href="#people">
            People
          </a>
        </li>
        <li className="menu-item">
          <a className="menuItem-link" href="#clients">
            Clients
          </a>
        </li>
        <li className="menu-item">
          <a className="menuItem-link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
      <img
        src={BurgerMenuIcon}
        className="burger-icon"
        alt="burgerIcon"
        onClick={showSideBar}
      />
    </header>
  );
};

export default Header;
