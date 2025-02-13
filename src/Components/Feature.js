import React from "react";
import "../styles/Feature.css"; // Import the CSS file
import Frame from "../assets/Frame.png";
const FeatureSection = () => {
  return (
    <div className="feature-section">
      <div className="feature-content">
        <img src= {Frame} alt="Feature" className="feature-image" />
        <div className="feature-text">
          <h2>The unseen of spending three years at Pixelgrade</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            erat et justo ipsum. Sed accumsan quam vitae erat luctus. Tristique
            feugiat vel posuere vestibulum lorem sed porta. Nibh mattis
            tristique malesuada. Mattis pulvinar et amet risus pretium nascetur.
            Estian quis massa pulvinar, aliquam quam vitae, tristique erat.
            Donec elementum purus odio.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
