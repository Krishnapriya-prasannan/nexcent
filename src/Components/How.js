import React from "react";
import { motion } from "framer-motion";
import "../styles/How.css"; // Import the CSS file
import Frame from "../assets/pana.png";

const HowSection = () => {
  return (
    <motion.div 
      className="how-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="how-content"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        <motion.img 
          src={Frame} 
          alt="How it works" 
          className="how-image"
          initial={{ rotateY: 30, opacity: 0 }}
          whileInView={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          whileHover={{ scale: 1.05, rotateY: 5 }}
        />

        <motion.div 
          className="how-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2>How to design your site footer like we did</h2>
          <p>
            Donec ac eros justo. Fusce egestas tristique efficitur. Nam tempor, 
            augue nec tincidunt vulputate, massa nunc varius arcu, at scelerisque 
            ex urna non ligula. Donec quis est at libero lobortis mollis. In hac 
            habitasse platea dictumst.
          </p>
          
          <motion.button 
            className="learn-more-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HowSection;
