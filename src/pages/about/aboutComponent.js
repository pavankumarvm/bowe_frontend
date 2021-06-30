import { Component } from "react";
import Navbar from "../../components/navbar/navigationComponent";
import AboutHeader from "../../components/about/aboutHeader/aboutHeaderComponent";
import WhoWeAre from "../../components/about/whoWeAre/whoWeAreComponent";
import LetsConnect from "../../components/letsConnect/letsConnectComponent";
import Footer from "../../components/footer/footerComponent";

import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "./aboutComponent.css";

class About extends Component {
  render() {
    return (
      <div className="aboutUs">
        <nav
          className="about_navbar navbar navbar-expand-lg navbar-dark px-5"
          id="about_navbar"
        >
          <div className="container-fluid">
            <span className="navbar-brand">
              <Link to={"/"}>
                <img src={logo} alt="logo" className="aboutlogo-img" />
              </Link>
            </span>
            <div className="navbar-nav">
              <div className="ml-auto b navbar-nav">
                <li className="nav-item px-2">
                  <Link to={"/about"} className="aboutnav-link">
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item px-2">
                  <Link to={"/courses"} className="aboutnav-link">
                    COURSES
                  </Link>
                </li>
                <li className="nav-item px-2">
                  <Link to={"/register"} className="aboutnav-link">
                    REGISTER
                  </Link>
                </li>
                <li className="nav-item px-2">
                  <Link to={"/login"} className="aboutnav-link">
                    LOGIN
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </nav>
        <AboutHeader></AboutHeader>
        <WhoWeAre></WhoWeAre>
        <LetsConnect></LetsConnect>
        <Footer></Footer>
      </div>
    );
  }
}

export default About;
