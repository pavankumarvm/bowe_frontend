import { Component } from "react";
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
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://discord.gg/FyrF2Pfx"
            className="discord"
          >
            <svg
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="90px"
              height="90px"
            >
              <path d="M12.345,6.236c-0.218-0.606-0.438-1.217-0.442-1.225c-0.105-0.235-0.348-0.383-0.604-0.357	c-0.162,0.013-3.995,0.343-6.451,2.318C3.564,8.158,1,15.092,1,21.087c0,0.106,0.027,0.209,0.08,0.301	c1.771,3.11,6.599,3.924,7.699,3.959c0.007,0.001,0.013,0.001,0.019,0.001c0.194,0,0.376-0.093,0.492-0.25l1.19-1.612	c-1.966-0.299-2.321-0.689-2.404-0.75c-0.444-0.327-0.772-0.785-0.374-1.363c0.306-0.449,0.948-0.597,1.44-0.344	C9.646,21.264,10.995,22.02,15,22c3.977-0.012,5.723-0.845,5.748-0.863c0.668-0.301,1.189-0.177,1.514,0.269	c0.387,0.607,0.111,1.018-0.331,1.344c-0.083,0.061-0.284,0.232-2.396,0.732l1.175,1.615c0.115,0.158,0.298,0.25,0.492,0.25	c0.007,0,0.013,0,0.019-0.001c1.101-0.035,5.929-0.849,7.699-3.959c0.053-0.092,0.08-0.195,0.08-0.301	c0-5.994-2.564-12.928-3.88-14.14c-2.424-1.948-6.257-2.278-6.419-2.292c-0.256-0.022-0.499,0.123-0.604,0.357	c-0.004,0.008-0.218,0.629-0.425,1.228C17.672,6.239,16.041,6,15,6S12.345,6.236,12.345,6.236z M11,19c-1.105,0-2-1.333-2-2.979	s0.895-2.979,2-2.979c1.109-0.165,1.976,1.333,2,2.979C13,17.667,12.105,19,11,19z M19,19c-1.105,0-2-1.342-2-2.997	s0.895-2.997,2-2.997s2,1.342,2,2.997S20.105,19,19,19z" />
            </svg>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/company/bowe-best-of-we"
            className="linkedin"
          >
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/bowe.co.in/"
            className="instagram"
          >
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default JoinCommunity;
