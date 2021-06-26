import { Component } from "react";
import logo from "../../images/logo.png";
import SlideShow from "../slideshow/slideshowComponent";
import StudentForm from "../forms/studentFormComponent";
import InstituteForm from "../forms/institutesFormComponent";
import ClientForm from "../forms/clientsFormComponent";

import "./letsConnectComponent.css";

import React, { useState } from "react";

const types = ["Institutes", "Students", "Clients"];

function TabGroup() {
  const [active, setActive] = useState(types[0]);

  const getActiveTab = () => {
    if (active === types[0]) {
      return <InstituteForm></InstituteForm>;
    } else if (active === types[1]) {
      return <StudentForm></StudentForm>;
    } else {
      return <ClientForm></ClientForm>;
    }
  };

  return (
    <div>
      <nav className="tabgroup">
        {types.map((type) => (
          <button
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
            className={"tab-links" + (active === type ? " active" : "")}
          >
            {type}
          </button>
        ))}
      </nav>
      <div className="tab-content" id="nav-tabContent">
        {getActiveTab()}
      </div>
    </div>
  );
}

class LetsConnect extends Component {
  render() {
    return (
      <div className="letsConnect">
        <div className="logo">
          <img src={logo} alt="BOWE" />
        </div>
        <div className="letsConnect-content">
          <div className="letsConnect-left">
            <div className="letsConnect-heading">
              <h1>LET'S CONNECT</h1>
              <p>
                When there are great ideas at stake, it’s always a good idea to
                share. Tell us how can we make it happen for you!
                <br />
                <br />
                Fill the form below or mail us at
                <a href="/"> info@bowe.in</a>
              </p>
            </div>
            <div className="letsConnect-form">
              <TabGroup></TabGroup>
            </div>
          </div>
          <div className="letsConnect-right">
            <SlideShow></SlideShow>
          </div>
        </div>
      </div>
    );
  }
}

export default LetsConnect;
