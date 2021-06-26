import { Component, useEffect, useState } from "react";

import client1 from "../../../images/client1.jpeg";
import client2 from "../../../images/client2.jpeg";
import client3 from "../../../images/client3.jpeg";
import client4 from "../../../images/client4.jpeg";
import client5 from "../../../images/client5.jpeg";
import client6 from "../../../images/client6.jpeg";

import "./recentClientsComponent.css";

function Slideshow({ images = [], interval = 3000 }) {
  const [thumbnails, setThumbnails] = useState([]);
  const [previousSlideStyle, setPreviousSlideStyle] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlideStyle, setNextSlideStyle] = useState({});
  const [currentSlideStyle, setCurrentSlideStyle] = useState({});

  useEffect(() => {
    setThumbnails(images);
    setCurrentSlideStyle({
      backgroundImage: "url('" + images[currentSlide] + "')",
    });

    if (currentSlide > 0) {
      setPreviousSlideStyle({
        backgroundImage: "url('" + images[currentSlide - 1] + "')",
      });
    } else {
      setPreviousSlideStyle({
        backgroundImage: "url('" + images[images.length - 1] + "')",
      });
    }

    if (currentSlide === images.length - 1) {
      setNextSlideStyle({
        backgroundImage: "url('" + images[0] + "')",
      });
    } else {
      setNextSlideStyle({
        backgroundImage: "url('" + images[currentSlide + 1] + "')",
      });
    }

    const loop = setInterval(() => {
      if (currentSlide === images.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }, interval);
    return () => clearInterval(loop);
  }, [images, currentSlide, interval]);

  function previous() {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(thumbnails.length - 1);
    }
  }

  function next() {
    if (currentSlide === thumbnails.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  return (
    <section className="slideshow">
      <div className="slide-holder">
        <section className="slide previous-slide">
          <div style={previousSlideStyle} className="slide-thumbnail"></div>
        </section>
        <section className="slide current-slide">
          <div style={currentSlideStyle} className="slide-thumbnail"></div>
        </section>
        <section className="slide next-slide">
          <div style={nextSlideStyle} className="slide-thumbnail"></div>
        </section>
      </div>

      <div className="slideshow-controller">
        <span onClick={previous}>Previous</span>
        <span onClick={next}>Next</span>
      </div>
    </section>
  );
}

class RecentClients extends Component {
  render() {
    return (
      <div className="recentClients">
        <div className="rC-title">
          <h1>Recent Clients</h1>
        </div>
        <div className="rC-desc">
          <Slideshow
            interval={3000}
            images={[client1, client2, client3, client4, client5, client6]}
          ></Slideshow>
        </div>
      </div>
    );
  }
}
export default RecentClients;
