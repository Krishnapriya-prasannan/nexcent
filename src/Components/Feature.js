import React from "react";
import { motion } from "framer-motion";
import "../styles/Feature.css"; // Import the CSS file
import Frame from "../assets/Frame.png";

const FeatureSection = () => {
  return (
    <div className="feature-section">
      <motion.div 
        className="feature-content"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img 
          src={Frame} 
          alt="Feature" 
          className="feature-image"
          whileHover={{ scale: 1.05, rotateY: 10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
        
        <motion.div 
          className="feature-text"
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <motion.h2 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            The unseen of spending three years at Pixelgrade
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut erat et justo ipsum. Sed accumsan quam vitae erat luctus. Tristique feugiat vel posuere vestibulum lorem sed porta. Nibh mattis tristique malesuada. Mattis pulvinar et amet risus pretium nascetur. Estian quis massa pulvinar, aliquam quam vitae, tristique erat. Donec elementum purus odio.
          </motion.p>
          <motion.button 
            className="learn-more-btn"
            whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FeatureSection;
