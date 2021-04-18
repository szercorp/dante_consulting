import { useState } from "react";
import useDocumentScrollThrottled from "../../../libs/useDocumentScrollThrottled";
import Logo from "assets/images/logos/Logo.svg";
import "./Header.css";

const Header = () => {
  const [hideHeader, setHideHeader] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 100;

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
        <li className="menu-item">About</li>
        <li className="menu-item">Services</li>
        <li className="menu-item">People</li>
        <li className="menu-item">Clients</li>
        <li className="menu-item">Contact</li>
      </ul>
    </header>
  );
};

export default Header;
