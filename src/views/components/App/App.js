import { useState } from "react";
import SideBar from "views/components/SideBar/SideBar";
import Header from "views/components/Header/Header";
import About from "views/components/About/About";
import Services from "views/components/Services/Services";
import People from "views/components/People/People";
import Clients from "views/components/Clients/Clients";
import Contact from "views/components/Contact/Contact";
import Footer from "views/components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

AOS.init();

const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const showSideBar = () => {
    console.log("Clicked burger ");
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <div className="app-wrapper">
      {isSidebarVisible === true && <SideBar showSideBar={showSideBar} />}
      <Header showSideBar={showSideBar} />
      <About />
      <Services />
      <People />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
