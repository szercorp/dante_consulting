import Phone from "assets/images/logos/Icon-phone.svg";
import MapPin from "assets/images/logos/Icon-mapPin.svg";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact</h1>
      <div className="contactCards-container">
        <div className="contact-card">
          <img src={Phone} className="card-icon" alt="phone" />
          <h1 className="contactCard-title">Get in touch</h1>
          <p className="contactCard-text">+30 6945 489 263</p>
          <button className="contactCard-button">Send us an email</button>
        </div>
        <div className="contact-card">
          <img src={MapPin} className="card-icon" alt="map-pin" />
          <h1 className="contactCard-title">Visit us</h1>
          <p className="contactCard-text">
            11 Feidiou st., 10678, Athens Greece
          </p>
          <button className="contactCard-button">View in map</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
