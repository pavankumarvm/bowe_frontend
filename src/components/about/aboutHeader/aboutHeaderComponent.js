import { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../../../images/logo.png";
import "./aboutHeaderComponent.css";

class AboutHeader extends Component {
  render() {
    return (
      <div className="top-container">
        <div className="outer-wrapper">
          <div className="home-wrapper">
            <div className="slide1 one">
              <section id="media">
                <div className="img">
                  <Link to={"/"}>
                    <img src={logo} alt="img" />
                  </Link>
                </div>
                <h3 className="description">
                  Our Mission is to present every aspiring gig with a chance to
                  implement their knowledge & hone their practical skills,
                  that's what BOWE stands for Best Of WE
                </h3>
              </section>
            </div>
            <div className="slide2 two">
              <div className="myrow">
                <div className="">
                  <div className="courseContainer bg-img1">
                    <div className="courseCard">
                      <div className="courseContent">
                        <h2 className="courseTitle">Development</h2>
                        <div className="courseDesc">
                          <h3>App Development</h3>
                          <h3>Website Development</h3>
                        </div>
                        <a href="/">EXPLORE</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="courseContainer bg-img2">
                    <div className="courseCard">
                      <div className="courseContent">
                        <h2 className="courseTitle">Design</h2>

                        <div className="courseDesc">
                          <h3>Product Design</h3>
                          <h3>UI/UX</h3>
                          <h3>Retail Design</h3>
                        </div>

                        <a href="/">EXPLORE</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="courseContainer bg-img3">
                    <div className="courseCard">
                      <div className="courseContent">
                        <h2 className="courseTitle">Communications</h2>
                        <div className="courseDesc">
                          <h3>Digital Marketing</h3>
                          <h3>Facebook Advertisement</h3>
                          <h3>Instagram Advertisement</h3>
                          <h3>Social & Influencer Marketing</h3>
                        </div>
                        <a href="/">EXPLORE</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="courseContainer bg-img4">
                    <div className="courseCard">
                      <div className="courseContent">
                        <h2 className="courseTitle">Strategy & Production</h2>
                        <div className="courseDesc">
                          <h3>Brand Strategy</h3>
                          <h3>Content Creative Strategy</h3>
                          <h3>Content Production</h3>
                          <h3>Video Production</h3>
                        </div>
                        <a href="/">EXPLORE</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutHeader;
