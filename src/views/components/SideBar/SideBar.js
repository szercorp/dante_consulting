import "./SideBar.css";
import CloseIcon from "assets/images/close-icon.svg";

const SideBar = ({ showSideBar }) => {
  return (
    <div
      className="sideBar-container"
      data-aos="slide-right"
      // data-aos-easing="linear"
      data-aos-duration="600"
    >
      <img
        src={CloseIcon}
        className="close-icon"
        alt="closeIcon"
        onClick={showSideBar}
      />
      <ul className="sideBarItems-container">
        <li className="sideBar-item">
          <a className="sideBarItem-link" href="#about" onClick={showSideBar}>
            About
          </a>
        </li>
        <li className="sideBar-item">
          <a
            className="sideBarItem-link"
            href="#services"
            onClick={showSideBar}
          >
            Services
          </a>
        </li>
        <li className="sideBar-item">
          <a className="sideBarItem-link" href="#people" onClick={showSideBar}>
            People
          </a>
        </li>
        <li className="sideBar-item">
          <a className="sideBarItem-link" href="#clients" onClick={showSideBar}>
            Clients
          </a>
        </li>
        <li className="sideBar-item">
          <a className="sideBarItem-link" href="#contact" onClick={showSideBar}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
