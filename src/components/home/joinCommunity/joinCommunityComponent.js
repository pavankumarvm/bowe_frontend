import { Component } from "react";
import "./joinCommunityComponent.css";

import facebook from "../../../images/j-facebook.png";
import instagram from "../../../images/j-instagram.png";
import discord from "../../../images/j-discord.png";
import linkedin from "../../../images/j-linkedin.png";

class JoinCommunity extends Component {
  render() {
    return (
      <div className="join_community">
        <h2 className="join_title">JOIN THE COMMUNITY</h2>
        <h3 className="join_desc">
          Join the most unique Community to get the Best out of You.
        </h3>
        <div className="join_links">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://wwww.facebook.com"
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
            <img src={linkedin} alt="linkedin" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/bowe.co.in/"
            className="instagram"
          >
            <img src={instagram} alt="instagram" />
          </a>
        </div>
      </div>
    );
  }
}

export default JoinCommunity;
