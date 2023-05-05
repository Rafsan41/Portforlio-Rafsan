import React from "react";
import "./HeroSection.css";
import rafsan_cover from "../../../assets/img/CoverImg/rafsan_cover.jpg";
import green_gradient from "../../../assets/img/CoverImg/green-gradient-rafsan.jpg";
import NavBar from "../../../sharedComponant/NavBar/NavBar";
const HeroSection = () => {
  return (
    <div className="main">
      <div className="slider-container">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators"></div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="slide001">
                <div className="part01">
                  <img
                    id="img01"
                    src={green_gradient}
                    className="d-block w-100 "
                    alt="..."
                  />
                </div>
                <div className="part02">
                  {/* <img id='img02' src='' className="d-block w-100 " alt="..."/> */}
                </div>
              </div>
              <div className="carousel-caption d-none d-md-block">
                <div className="slide-content">
                  <div className="slide-head">
                    <h3>I am R@fsan</h3>
                    <h5>Font-End Wed Developer.</h5>
                  </div>
                  <div className="main-btn-container">
                    <div className="btn-container">
                      <div className="contact-btn">
                        <button>Contact Me</button>
                      </div>
                      <div className="download-btn">
                        <button>Download CV</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
