import React from "react";
import { motion } from "framer-motion";
import "../styles/Stats.css";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

const statsData = [
  { id: 1, icon: icon1, number: "2,245,341", label: "Members" },
  { id: 2, icon: icon2, number: "46,328", label: "Clubs" },
  { id: 3, icon: icon3, number: "828,867", label: "Event Bookings" },
  { id: 4, icon: icon4, number: "1,926,436", label: "Payments" },
];

const StatsSection = () => {
  return (
    <div className="stats-section">
      <motion.div 
        className="stats-text"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2>
          Helping a local <br />
          <span className="highlight">business reinvent itself</span>
        </h2>
        <p>We reached here with our hard work and dedication</p>
      </motion.div>

      <motion.div 
        className="stats-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        {statsData.map((stat, index) => (
          <motion.div 
            key={stat.id} 
            className="stat"
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <motion.img 
              src={stat.icon} 
              alt={stat.label} 
              className="stat-icon"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            <div>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default StatsSection;
