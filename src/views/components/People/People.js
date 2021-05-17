import "./People.css";

const People = () => {
  return (
    <div className="people-container" id="people">
      <div className="people-contents">
        <h1
          className="people-title"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="700"
        >
          People
        </h1>
        <p
          className="people-text"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="700"
        >
          Dante Consulting team consists of high caliber individuals of the
          Greek NPL and REO market, with extensive and hands-on experience of
          the industry and robust ability both to apply{" "}
          <span style={{ fontFamily: "PoppinsBold" }}>hands-on know how</span>{" "}
          and to offer{" "}
          <span style={{ fontFamily: "PoppinsBold" }}>
            out-of-the-box solutions
          </span>
          .<span>{<br />}</span>
          <span>{<br />}</span>
          Dante Consulting was founded by
          <span style={{ fontFamily: "PoppinsBold" }}>
            {" "}
            Mrs. Sonia Gerogianni
          </span>
          , in order to offer clients a unique skill-set with regards NPL
          portfolio management.
        </p>
        <button
          className="people-button"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="700"
        >
          <a
            className="peopleButton-link"
            href="https://www.linkedin.com/in/sonia-gerogianni-llm/"
          >
            View Sonia's profile
          </a>
        </button>
      </div>
    </div>
  );
};

export default People;
