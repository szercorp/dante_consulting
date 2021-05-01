import Divider from "assets/images/logos/Divider-icon.svg";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container" id="services">
      <div className="services-contents">
        <h1 className="services-title">Services</h1>
        <p
          className="services-text"
          data-aos="slide-up"
          data-aos-easing="linear"
          data-aos-duration="700"
        >
          <h1 className="servicesText-title">
            1. Established and start up business consulting
          </h1>
          <h2 className="servicesText-content">
            ∙ Consulting related to distressed portfolios (banks, Servicers, Law
            Firms).
          </h2>
          <h2 className="servicesText-content">
            ∙ Review and assessment of distressed portfolios for acquirement
            (NPLs, REOs, single trades, assets trapped in complex legal and
            regulatory structures).
          </h2>
          <h2 className="servicesText-content">
            {" "}
            ∙ Detailed walk-through of the Greek Enforcement Actions and
            regulatory environment.
          </h2>
          <h2 className="servicesText-content">
            ∙ Consult and participate in due diligence process, Agreements and
            SLAs drafting and on-boarding process.
          </h2>
          <h2 className="servicesText-content">
            ∙ Review of business models and consult on cost/benefit analysis of
            potential investments.
          </h2>
        </p>
        <img
          src={Divider}
          className="divider-icon"
          alt="divider"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="500"
        />
        <p
          className="services-text"
          id="text2"
          data-aos="slide-up"
          data-aos-easing="linear"
          data-aos-duration="700"
        >
          <h1 className="servicesText-title">2. Building infrastructures</h1>
          <h2 className="servicesText-content">
            ∙ Consult on infrastructures and tools needed for the management of
            assets and distressed portfolios.
          </h2>
          <h2 className="servicesText-content">
            ∙ Consult on management oriented to performance, risk mitigation and
            cost in time and money mitigation.
          </h2>
          <h2 className="servicesText-content">
            ∙ Consult on recruitment, outsourcing and teams’ training and
            coaching.
          </h2>
          <h2 className="servicesText-content">
            ∙ Consult on best use of KPIs and analytics for portfolio management
            and offer input on necessary metrics
          </h2>
        </p>
        <img
          src={Divider}
          className="divider-icon"
          alt="divider"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="500"
        />
        <p
          className="services-text"
          id="text3"
          data-aos="slide-up"
          data-aos-easing="linear"
          data-aos-duration="700"
        >
          <h1 className="servicesText-title">
            3. Business development and market research
          </h1>
          <h2 className="servicesText-content">
            ∙ Consulting on potential business development and network building
          </h2>
          <h2 className="servicesText-content">
            ∙ Legal framework and regulatory environment inspection for business
            and academic needs
          </h2>
          <h2 className="servicesText-content">
            ∙ Market intelligence on best practice and real cases experience
          </h2>
        </p>
      </div>
    </div>
  );
};

export default Services;
