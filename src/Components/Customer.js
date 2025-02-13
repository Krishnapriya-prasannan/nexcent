import React from "react";
import "../styles/Customer.css"; // Import CSS file
import Image from "../assets/image.png"; // Main image on left
import Logo from "../assets/Logo13.png"; 
import Logo1 from "../assets/Logo8.png";
import Logo2 from "../assets/Logo9.png";
import Logo3 from "../assets/Logo10.png";
import Logo4 from "../assets/Logo11.png";
import Logo5 from "../assets/Logo12.png";

const CustomerSection = () => {
  return (
    <div className="customer-section">
      {/* Left Side - Image */}
      <div className="customer-image-container">
        <img src={Image} alt="Customer" className="customer-image" />
      </div>

      {/* Right Side - Text Content */}
      <div className="customer-content">
        <p className="customer-text">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero blandit, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at malesuada elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus nulla ut augue
          ultrices, varius ligula sit amet, suscipit augue.
        </p>
        
        {/* Customer Name */}
        <h4 className="customer-name">Tim Smith</h4>
        <p className="customer-title">British Dragon Boat Racing Association</p>

        {/* Logos */}
        <div className="customer-logos">
          <img src={Logo} alt="logo" className="logo" />
          <img src={Logo1} alt="logo" className="logo" />
          <img src={Logo2} alt="logo" className="logo" />
          <img src={Logo3} alt="logo" className="logo" />
          <img src={Logo4} alt="logo" className="logo" />
          <img src={Logo5} alt="logo" className="logo" />
          <button className="meet-customers-btn">Meet all customers →</button>

        </div>

      </div>
    </div>
  );
};

export default CustomerSection;
