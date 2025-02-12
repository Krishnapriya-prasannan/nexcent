import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/Hero.css"; // Updated CSS File
import illustration from "../assets/Illustration.png"; 

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: false,
    fade: true,
    cssEase: "linear",
  };

  return (
    <section className="hero">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="hero-slide">
          <div className="hero-container">
            <div className="hero-text">
              <h1>Lessons and insights <br /><span>from 8 years</span></h1>
              <p>Where to grow your business as a photographer: site or social media?</p>
              <a href="#" className="register-btn">Register</a>
            </div>
            <div className="hero-image">
              <img src={illustration} alt="Illustration" />
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="hero-slide">
          <div className="hero-container">
            <div className="hero-text">
              <h1>Discover new strategies <br /><span>for success</span></h1>
              <p>Join thousands of professionals growing their careers.</p>
              <a href="#" className="register-btn">Get Started</a>
            </div>
            <div className="hero-image">
              <img src={illustration} alt="Illustration" />
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="hero-slide">
          <div className="hero-container">
            <div className="hero-text">
              <h1>Transform your <br /><span>online presence</span></h1>
              <p>Get the best insights to make your brand stand out.</p>
              <a href="/" className="register-btn">Register</a>
            </div>
            <div className="hero-image">
              <img src={illustration} alt="Illustration" />
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Hero;
