import { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo.png";
import "./navigationComponent.css";

class Navbar extends Component {
  render() {
    return (
      <div className="navigation">
        <nav className="navBar">
          <li className="nav_item">
            <Link to={"/about"} className="nav_link">
              About
            </Link>
          </li>
          <li className="nav_item">
            <Link to={"/courses"} className="nav_link">
              Courses
            </Link>
          </li>
          <li className="nav_item">
            <a href="/" className="navBar-brand">
              <img className="logo" src={logo} alt="BOWE" />
            </a>
          </li>
          <li className="nav_item">
            <Link to={"/register"} className="nav_link">
              Register
            </Link>
          </li>
          <li className="nav_item">
            <Link to={"/login"} className="nav_link">
              Login
            </Link>
          </li>
        </nav>
      </div>
    );
  }
}

export default Navbar;
