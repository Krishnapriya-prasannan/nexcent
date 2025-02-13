import React from "react";
import "../styles/Stats.css";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
const StatsSection = () => {
  return (
    <div className="stats-section">
      {/* Left Text Content */}
      <div className="stats-text">
        <h2>
          Helping a local <br />
          <span className="highlight">business reinvent itself</span>
        </h2>
        <p>We reached here with our hard work and dedication</p>
      </div>

      {/* Right Statistics */}
      <div className="stats-container">
        <div className="stat">
          <img src={icon1} alt="Members" />
          <div>
            <h3>2,245,341</h3>
            <p>Members</p>
          </div>
        </div>
        <div className="stat">
          <img src={icon2} alt="Clubs" />
          <div>
            <h3>46,328</h3>
            <p>Clubs</p>
          </div>
        </div>
        <div className="stat">
          <img src={icon3} alt="Event Bookings" />
          <div>
            <h3>828,867</h3>
            <p>Event Bookings</p>
          </div>
        </div>
        <div className="stat">
          <img src={icon4} alt="Payments" />
          <div>
            <h3>1,926,436</h3>
            <p>Payments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
