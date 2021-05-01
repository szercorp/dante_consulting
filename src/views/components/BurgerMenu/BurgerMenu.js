import React from "react";
import { slide as Menu } from "react-burger-menu";
import BurgerIcon from "assets/images/logos/Burger-menu-icon.svg";
import CrossIcon from "assets/images/x-cross.svg";
import "./BurgerMenu.css";

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  handleStateChange(state) {
    this.setState({ isMenuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ isMenuOpen: false });
  }

  render() {
    return (
      <div className="burgerMenu-container">
        <Menu
          isOpen={this.state.isMenuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
          customBurgerIcon={<img src={BurgerIcon} alt="burger-icon" />}
          customCrossIcon={
            <img
              src={CrossIcon}
              alt="cross-icon"
              style={{ width: "44px", height: "44px" }}
            />
          }
          width={"100%"}
        >
          <li className="burgerMenu-item">
            <a
              className="burgerMenuItem-link"
              href="#about"
              onClick={() => this.closeMenu()}
            >
              About
            </a>
          </li>
          <li className="burgerMenu-item">
            <a
              className="burgerMenuItem-link"
              href="#services"
              onClick={() => this.closeMenu()}
            >
              Services
            </a>
          </li>
          <li className="burgerMenu-item">
            <a
              className="burgerMenuItem-link"
              href="#people"
              onClick={() => this.closeMenu()}
            >
              People
            </a>
          </li>
          <li className="burgerMenu-item">
            <a
              className="burgerMenuItem-link"
              href="#clients"
              onClick={() => this.closeMenu()}
            >
              Clients
            </a>
          </li>
          <li className="burgerMenu-item">
            <a
              className="burgerMenuItem-link"
              href="#contact"
              onClick={() => this.closeMenu()}
            >
              Contact
            </a>
          </li>
        </Menu>
      </div>
    );
  }
}

export default BurgerMenu;
