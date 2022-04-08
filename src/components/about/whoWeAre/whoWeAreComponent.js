import logo from "../../../images/logo.jpeg";
import "./whoWeAreComponent.css";

const WhoWeAre = () => {
  return (
    <div className="who_we_are">
      <h1 className="who_title">WHO WE ARE?</h1>
      <p className="who_desc">
        <div className="who_text">
          <b>BOWE EDTECH LLP </b>was founded to solve one of the most important
          issues among students i.e., a lack of practical knowledge.
          <br /> <br />
          We collaborate with a variety of organizations to provide their
          students first-hand insights; and a taste of real-world scenarios
          through live Industry Projects and one-on-one Mentoring within their
          Institution-based Workspace.
        </div>
        <div className="who_img">
          <img src={logo} alt="who_img" />
        </div>
      </p>
    </div>
  );
};

export default WhoWeAre;
