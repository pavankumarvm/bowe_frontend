import { Component } from "react";

import facebook from "../images/b-facebook.png";
import insta from "../images/b-insta.png";
import discord from "../images/b-discord.png";
import twitter from "../images/b-twitter.png";
import "./joinCommunityComponent.css";
class JoinCommunity extends Component {
  render() {
    return (
      <div className="join_community">
        <h2 className="join_title">JOIN THE COMMUNITY</h2>
        <h3 className="join_desc">
          Join Us at Best of We for various internships,projects and learning
          new courses.
        </h3>
        <div className="join_links">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/company/bowe-best-of-we"
            className="facebook"
          >
            <img src={facebook} alt="facebook" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://discord.gg/FyrF2Pfx"
            className="discord"
          >
            <img src={discord} alt="discord" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/company/bowe-best-of-we"
            className="linkedin"
          >
            <img src={twitter} alt="linkedin" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/bowe.co.in/"
            className="instagram"
          >
            <img src={insta} alt="instagram" />
          </a>
        </div>
      </div>
    );
  }
}

export default JoinCommunity;
