import { Component } from "react";
import LetsConnect from "./letsConnectComponent";

import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import "./aboutComponent.css";

class About extends Component {
  render() {
    return (
      <div className="aboutUs">
        <nav
          className="about_navbar navbar navbar-expand-lg navbar-light px-5"
          id="about_navbar"
        >
          <div className="container-fluid">
            <span className="navbar-brand">
              <Link to={"/"}>
                <img src={logo} alt="logo" className="logo-img" />
              </Link>
            </span>
            <div className="navbar-nav">
              <div className="ml-auto b navbar-nav">
                <li className="nav-item px-2">
                  <Link to={"/about"} className="nav-link">
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item px-2">
                  <Link to={"/courses"} className="nav-link">
                    COURSES
                  </Link>
                </li>
                <li className="nav-item px-2">
                  <Link to={"/register"} className="nav-link">
                    REGISTER
                  </Link>
                </li>
                <li className="nav-item px-2">
                  <Link to={"/login"} className="nav-link">
                    LOGIN
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </nav>
        <div className="top-container">
          <div className="outer-wrapper">
            <div className="home-wrapper">
              <div className="slide1 one">
                <section id="media">
                  <h3 className="description">
                    WE ARE ON THE MISSION TO PROVIDE THE ON GROUND AND HANDS ON
                    EXPERINCE TO EACH INDIVDUAL OF WHO’S SKILLS BEEN UNDER VALUE
                    AND GET THE BEST OF THEM WITH BOWE (BEST OF WE)
                  </h3>
                </section>
              </div>
              <div className="slide2 two">
                <div className="myrow">
                  <div className="">
                    <div className="courseContainer bg-img1">
                      <div className="courseCard">
                        <div className="courseContent">
                          <h2 className="courseTitle">UI/UX</h2>
                          {/* <div className="courseDesc">
                            <h3></h3>
                          </div> */}
                          <a href="/">EXPLORE</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="courseContainer bg-img2">
                      <div className="courseCard">
                        <div className="courseContent">
                          <h2 className="courseTitle">Web Development</h2>

                          {/* <div className="courseDesc">
                            <h3>
                            </h3>
                          </div> */}

                          <a href="/">EXPLORE</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="courseContainer bg-img3">
                      <div className="courseCard">
                        <div className="courseContent">
                          <h2 className="courseTitle">
                            Android
                            <br />
                            Development
                          </h2>

                          {/* <div className="courseDesc">
                            <h3>
                            </h3>
                          </div> */}

                          <a href="/">EXPLORE</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="courseContainer bg-img4">
                      <div className="courseCard">
                        <div className="courseContent">
                          <h2 className="courseTitle">
                            Graphics <br />
                            Designer
                          </h2>

                          {/* <div className="courseDesc">
                            <h3>
                            </h3>
                          </div> */}
                          <a href="/">EXPLORE</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="who_we_are">
          <h1 className="who_title">WHO WE ARE?</h1>
          <p className="who_desc">
            <div className="who_text">
              <b>BOWE EDTECH LLP </b>was founded to solve one of the most
              important issues among students i.e., a lack of practical
              knowledge.
              <br /> <br />
              We collaborate with a variety of organizations to provide their
              students first-hand insights; and a taste of real-world scenarios
              through live Industry Projects and one-on-one Mentoring within
              their Institution-based Workspace.
            </div>
            <div className="who_img">
              <img src={logo} alt="who_img" />
            </div>
          </p>
        </div>
        <LetsConnect></LetsConnect>
      </div>
    );
  }
}

export default About;
