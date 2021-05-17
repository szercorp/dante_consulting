import Card1Logo from "assets/images/logos/HipogesIberia.svg";
import Card2Logo from "assets/images/logos/HipogesHellas.svg";
import Card3Logo from "assets/images/logos/Karma.svg";
import Card4Logo from "assets/images/logos/Dialectica.svg";
import "./Clients.css";

const Clients = () => {
  return (
    <div className="clients-container" id="clients">
      <div className="clients-contents">
        <h1
          className="clients-title"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="700"
        >
          Clients
        </h1>
        <div className="clientsCards-container">
          <a href="https://www.hipoges.com/en/home-en/">
            <div
              className="clients-card"
              id="clientCard1"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <img src={Card1Logo} alt="card1" />
            </div>
          </a>
          <div
            className="clients-card"
            id="clientCard3"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="700"
          >
            <img src={Card2Logo} alt="card2" />
          </div>
          <a href="http://www.karmaconsulting.gr/">
            <div
              className="clients-card"
              id="clientCard2"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <img src={Card3Logo} alt="card3" />
            </div>
          </a>

          <a href="https://dialecticanet.com/">
            <div
              className="clients-card"
              id="clientCard4"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <img src={Card4Logo} alt="card4" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Clients;
