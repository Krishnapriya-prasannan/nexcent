import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/Hero.css"; 
import illustration from "../assets/Illustration.png"; 

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: false,
    fade: true,
    cssEase: "ease-in-out",
  };

  return (
    <section className="hero">
      <Slider {...settings}>
        {["Lessons and insights from 8 years", "Discover new strategies for success", "Transform your online presence"].map((title, index) => (
          <div className="hero-slide" key={index}>
            <div className="hero-container">
              <div className="hero-text animate-text">
                <h1>{title.split(" ").slice(0, -2).join(" ")} <br /><span>{title.split(" ").slice(-2).join(" ")}</span></h1>
                <p>{index === 0 ? "Where to grow your business as a photographer: site or social media?" : index === 1 ? "Join thousands of professionals growing their careers." : "Get the best insights to make your brand stand out."}</p>
                <a href="#" className="register-btn"> {index === 1 ? "Get Started" : "Register"} </a>
              </div>
              <div className="hero-image animate-image">
                <img src={illustration} alt="Illustration" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
