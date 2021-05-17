import "./About.css";

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-contents">
        <h1
          className="about-title"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="700"
        >
          About
        </h1>
        <p
          className="about-text"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="700"
        >
          Dante Consulting is a consultancy based in Athens Greece, specialized
          on{" "}
          <span style={{ fontFamily: "PoppinsBold" }}>
            distressed portfolios acquirement and management
          </span>{" "}
          and{" "}
          <span style={{ fontFamily: "PoppinsBold" }}>
            assets trapped in complex structures
          </span>
          , aiming to offer clients a unique skill-set which will avoid
          mass-producted solutions and rather follow the clients’ individual
          needs.
        </p>
        <span
          className="divider"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="700"
        ></span>
        <p
          className="about-text"
          id="aboutText2"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="700"
        >
          Our mission is to offer{" "}
          <span style={{ fontFamily: "PoppinsBold" }}>consulting</span> based on
          real cases hands-on experience, besides theoretical and standard text
          book know-how.
        </p>
        {/* 
        
          
      
        
         */}
      </div>
    </div>
  );
};

export default About;
