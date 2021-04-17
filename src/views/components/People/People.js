import "./People.css";

const People = () => {
  return (
    <div className="people-container">
      <div className="people-contents">
        <h1 className="people-title">People</h1>
        <p className="people-text">
          Dante Consulting team consists of high caliber individuals of the
          Greek NPL and REO market, with extensive and hands-on experience of
          the industry and robust ability both to apply{" "}
          <span style={{ fontWeight: 700 }}>hands-on know how</span> and to
          offer{" "}
          <span style={{ fontWeight: 700 }}>out-of-the-box solutions</span>.
          <span>{<br />}</span>
          <span>{<br />}</span>
          Dante Consulting was founded by
          <span style={{ fontWeight: 700 }}> Mrs. Sonia Gerogianni</span>, in
          order to offer clients a unique skill-set with regards NPL portfolio
          management.
        </p>
        <button className="people-button">View Sonia's Profile</button>
      </div>
    </div>
  );
};

export default People;
