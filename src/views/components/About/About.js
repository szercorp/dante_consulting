import "./About.css";

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-contents">
        <h1 className="about-title">About</h1>
        <p className="about-text">
          Dante Consulting is a consultancy based in Athens Greece, specialized
          on{" "}
          <span style={{ fontWeight: 700 }}>
            distressed portfolios acquirement and management
          </span>{" "}
          and{" "}
          <span style={{ fontWeight: 700 }}>
            assets trapped in complex structures
          </span>
          , aiming to offer clients a unique skill-set which will avoid
          mass-producted solutions and rather follow the clients’ individual
          needs.
        </p>
        <span className="divider"></span>
        <p className="about-text" id="aboutText2">
          Our mission is to offer{" "}
          <span style={{ fontWeight: 700 }}>consulting</span> based on real
          cases hands-on experience, besides theoretical and standard text book
          know-how.
        </p>
        {/* 
        
          
      
        
         */}
      </div>
    </div>
  );
};

export default About;
