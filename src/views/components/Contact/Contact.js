import Phone from "assets/images/logos/Icon-phone.svg";
import MapPin from "assets/images/logos/Icon-mapPin.svg";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h1
        className="contact-title"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="700"
      >
        Contact
      </h1>
      <div className="contactCards-container">
        <div
          className="contact-card"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="700"
        >
          <img src={Phone} className="card-icon" alt="phone" />
          <h1 className="contactCard-title">Get in touch</h1>
          <p className="contactCard-text">+30 6945 489 263</p>
          <button className="contactCard-button">
            <a
              className="contactCardButton-link"
              href="mailto:soniagerogianni@danteconsulting.gr"
            >
              Send us an email
            </a>
          </button>
        </div>
        <div
          className="contact-card"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="700"
        >
          <img src={MapPin} className="card-icon" alt="map-pin" />
          <h1 className="contactCard-title">Visit us</h1>
          <p className="contactCard-text">
            11 Feidiou st., 10678, Athens Greece
          </p>
          <button className="contactCard-button">
            <a
              className="contactCardButton-link"
              href="https://www.google.com/maps?ie=UTF-8&q=11%20Feidiou%20st.%2C%2010678%2C%20Athens%20Greece&sa=X&um=1&ved=2ahUKEwiBzrC63u7uAhUn-yoKHYlgAZAQ_AUoAnoECAMQBA"
            >
              View in map
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
