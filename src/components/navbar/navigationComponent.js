import { Component } from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

import logo from "../../images/logo.png";
import "./navigationComponent.css";

class Navbar extends Component {
  state = {
    toggle: false,
  };
  Toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    return (
      <div className="navigation">
        <nav className="navBar">
          <li className="nav_item_icon" onClick={this.Toggle}>
            <i className="fa fa-bars"></i>
          </li>
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
          <li className="nav_brand">
            <Link to={"/"} className="navBar-brand">
              <img className="logo" src={logo} alt="BOWE" />
            </Link>
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
        <nav className={"side_navBar" + (this.state.toggle ? " expand" : "")}>
          <li className="side_nav_brand">
            <Link to={"/"} className="side_navBar-brand">
              <img className="logo" src={logo} alt="BOWE" />
            </Link>
          </li>
          <li className="side_nav_item">
            <Link to={"/about"} className="side_nav_link">
              About
            </Link>
          </li>
          <li className="side_nav_item">
            <Link to={"/courses"} className="side_nav_link">
              Courses
            </Link>
          </li>
          <li className="side_nav_item">
            <Link to={"/register"} className="side_nav_link">
              Register
            </Link>
          </li>
          <li className="side_nav_item">
            <Link to={"/login"} className="side_nav_link">
              Login
            </Link>
          </li>
          <li className="side_nav_item_icon" onClick={this.Toggle}>
            <i className="fa fa-times"></i>
          </li>
        </nav>
      </div>
    );
  }
}

export default Navbar;
