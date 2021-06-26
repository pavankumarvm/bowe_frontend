import { Component } from "react";
import "font-awesome/css/font-awesome.min.css";

import "./socialComponent.css";

class Social extends Component {
  render() {
    return (
      <div className="social">
        <div className="scrollToTop">Scroll To Top</div>
        <div className="social-part">
          <ul className="social-holder">
            <li className="social-follow">Follow Us</li>
            <li className="social-dash">&ndash;</li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/bowe-best-of-we"
                className="linkedin"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/bowe.co.in/"
                className="instagram"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://discord.gg/FyrF2Pfx"
                className="discord"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Social;
