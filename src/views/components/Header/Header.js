import Logo from "assets/images/logos/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
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
    </div>
  );
};

export default Header;
