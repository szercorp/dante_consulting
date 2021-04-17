import Card1Logo from "assets/images/logos/HipogesIberia.svg";
import Card2Logo from "assets/images/logos/HipogesHellas.svg";
import Card3Logo from "assets/images/logos/Karma.svg";
import Card4Logo from "assets/images/logos/Dialectica.svg";
import "./Clients.css";

const Clients = () => {
  return (
    <div className="clients-container">
      <div className="clients-contents">
        <h1 className="clients-title">Clients</h1>
        <div className="clientsCards-container">
          <div className="clients-card" id="clientCard1">
            <img src={Card1Logo} alt="card1" />
          </div>
          <div className="clients-card" id="clientCard2">
            <img src={Card3Logo} alt="card3" />
          </div>
          <div className="clients-card" id="clientCard3">
            <img src={Card2Logo} alt="card2" />
          </div>
          <div className="clients-card" id="clientCard4">
            <img src={Card4Logo} alt="card4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
