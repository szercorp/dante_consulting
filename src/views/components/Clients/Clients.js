import Card1Logo from "assets/images/logos/HipogesIberia.svg";
import Card2Logo from "assets/images/logos/HipogesHellas.svg";
import Card3Logo from "assets/images/logos/Karma.svg";
import Card4Logo from "assets/images/logos/Dialectica.svg";
import "./Clients.css";

const Clients = () => {
  return (
    <div className="clients-container" id="clients">
      <div className="clients-contents">
        <h1 className="clients-title">Clients</h1>
        <div className="clientsCards-container">
          <div
            className="clients-card"
            id="clientCard1"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="700"
          >
            <a href="https://www.hipoges.com/en/home-en/">
              <img src={Card1Logo} alt="card1" />
            </a>
          </div>
          <div
            className="clients-card"
            id="clientCard2"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="700"
          >
            <a href="http://www.karmaconsulting.gr/">
              <img src={Card3Logo} alt="card3" />
            </a>
          </div>
          <div
            className="clients-card"
            id="clientCard3"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="700"
          >
            <img src={Card2Logo} alt="card2" />
          </div>
          <div
            className="clients-card"
            id="clientCard4"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="700"
          >
            <a href="https://dialecticanet.com/">
              <img src={Card4Logo} alt="card4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
