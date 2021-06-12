import { Component } from "react";
import logo from "../images/logo.png";

import "./letsConnectComponent.css";

import React, { useState } from "react";

const types = ["Institutes", "Students", "Clients"];

function TabGroup() {
  const [active, setActive] = useState(types[0]);

  const getActiveTab = () => {
    if (active === types[0]) {
      return InstituteForm();
    } else if (active === types[1]) {
      return StudentForm();
    } else {
      return ClientForm();
    }
  };

  const StudentForm = () => {
    return (
      <div class="tab-panel" id="nav-student-panel">
        <form className="form">
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <input
            className="form-input"
            type="text"
            id="state"
            name="state"
            placeholder="State"
            required
          />
          <input
            className="form-input"
            type="text"
            id="city"
            name="city"
            placeholder="City"
            required
          />
          <input
            className="form-input"
            type="text"
            id="college"
            name="College"
            placeholder="College"
            required
          />
          <input
            className="form-input"
            type="text"
            id="position"
            name="position"
            placeholder="Position Applied for"
            required
          />
          <textarea
            rows="3"
            cols="50"
            className="form-textarea"
            type="text"
            id="message"
            name="message"
            placeholder="Message"
            data-length="500"
            max-length="500"
            required
          />
          <div>
            <label for="file" className="resume">
              Upload your Resume:
            </label>
            <input
              className="form-input"
              type="file"
              id="upload"
              name="file"
              required
            />
          </div>
          <button
            type="submit"
            className="submit"
            id="submit"
            name="student-form"
          >
            Submit
          </button>
        </form>
      </div>
    );
  };

  const InstituteForm = () => {
    return (
      <div class="tab-panel" id="nav-clients-panel">
        <form className="form">
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <textarea
            rows="3"
            cols="50"
            className="form-textarea"
            type="text"
            id="address"
            name="address"
            placeholder="Office Address/Correspondence Address"
            max-length="500"
            required
          ></textarea>
          <input
            className="form-input"
            type="number"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            required
          />
          <input
            className="form-input"
            type="text"
            id="website"
            name="website"
            placeholder="Website"
            required
          />
          <textarea
            rows="3"
            cols="50"
            className="form-textarea"
            auto
            type="text"
            id="message"
            name="message"
            placeholder="Message"
            data-length="500"
            max-length="500"
            required
          ></textarea>
          <button
            type="submit"
            className="submit"
            id="submit"
            name="client-form"
          >
            Submit
          </button>
        </form>
      </div>
    );
  };

  const ClientForm = () => {
    return (
      <div class="tab-panel" id="nav-institute-panel">
        <form className="form">
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
          <input
            className="form-input"
            type="text"
            id="website"
            name="website"
            placeholder="Website"
            required
          />
          <input
            className="form-input"
            type="text"
            id="state"
            name="state"
            placeholder="State"
            required
          />
          <input
            className="form-input"
            type="text"
            id="city"
            name="city"
            placeholder="City"
            required
          />
          <textarea
            rows="3"
            cols="50"
            className="form-textarea"
            auto
            type="text"
            id="message"
            name="message"
            placeholder="Message"
            data-length="500"
            required
          ></textarea>
          <button
            type="submit"
            className="submit"
            id="submit"
            name="institutes-form"
          >
            Submit
          </button>
        </form>
      </div>
    );
  };

  return (
    <div>
      <nav class="tabgroup">
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
      <div class="tab-content" id="nav-tabContent">
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
                <a href=""> business@bowe.in</a>
              </p>
            </div>
            <div className="letsConnect-form">
              <TabGroup></TabGroup>
            </div>
          </div>
          <div className="letsConnect-right"></div>
        </div>
      </div>
    );
  }
}

export default LetsConnect;
