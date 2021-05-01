import Header from "views/components/Header/Header";
import BurgerMenu from "views/components/BurgerMenu/BurgerMenu";
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
  return (
    <div className="app-wrapper">
      <BurgerMenu />
      <Header />
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
