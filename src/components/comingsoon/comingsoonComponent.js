import logo from "../../images/logo.png";
import comingSoon from "../../images/b-comingsoon.png";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./comingsoonComponent.css";

class ComingSoon extends Component {
  // @override
  render() {
    return (
      <div className="comingsoon">
        <nav
          className="commingsoon_navbar navbar navbar-expand-lg navbar-dark px-5"
          id="commingsoon_navbar"
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
        <div className="content">
          <img src={comingSoon} className="comingSoon-img" alt="comingsoon" />
          <h1>
            THIS PAGE IS UNDER CONSTRUCTION
            <br />
            <span className="coming">COMING </span>
            <span className="soon">SOON</span>
          </h1>
        </div>
      </div>
    );
  }
}

export default ComingSoon;
