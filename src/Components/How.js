import React from "react";
import "../styles/How.css"; // Import the CSS file
import Frame from "../assets/pana.png";

const HowSection = () => {
  return (
    <div className="how-section">
      <div className="how-content">
        <img src={Frame} alt="How it works" className="how-image" />
        <div className="how-text">
          <h2>How to design your site footer like we did</h2>
          <p>
            Donec ac eros justo. Fusce egestas tristique efficitur. Nam tempor, 
            augue nec tincidunt vulputate, massa nunc varius arcu, at scelerisque 
            ex urna non ligula. Donec quis est at libero lobortis mollis. In hac 
            habitasse platea dictumst.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default HowSection;
