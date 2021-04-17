import React from "react";
import { slide as Menu } from "react-burger-menu";
import BurgerIcon from "assets/images/logos/Burger-menu-icon.svg";
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
          width={"100%"}
        >
          <li className="burgerMenu-item">About</li>
          <li className="burgerMenu-item">Services</li>
          <li className="burgerMenu-item">People</li>
          <li className="burgerMenu-item">Clients</li>
          <li className="burgerMenu-item">Contact</li>
        </Menu>
      </div>
    );
  }
}

export default BurgerMenu;
