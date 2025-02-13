import React from "react";
import { motion } from "framer-motion";
import "../styles/Customer.css";
import Image from "../assets/image.png";
import Logo from "../assets/Logo13.png";
import Logo1 from "../assets/Logo8.png";
import Logo2 from "../assets/Logo9.png";
import Logo3 from "../assets/Logo10.png";
import Logo4 from "../assets/Logo11.png";
import Logo5 from "../assets/Logo12.png";

const logos = [Logo, Logo1, Logo2, Logo3, Logo4, Logo5];

const CustomerSection = () => {
  return (
    <motion.div 
      className="customer-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Left Side - Image */}
      <motion.div 
        className="customer-image-container"
        whileHover={{ rotateY: 10, scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.img
          src={Image}
          alt="Customer"
          className="customer-image"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </motion.div>

      {/* Right Side - Text Content */}
      <div className="customer-content">
        <motion.p
          className="customer-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero blandit, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at malesuada elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus nulla ut augue
          ultrices, varius ligula sit amet, suscipit augue.
        </motion.p>
        
        {/* Customer Name */}
        <motion.h4 
          className="customer-name"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        >
          Tim Smith
        </motion.h4>
        <motion.p 
          className="customer-title"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        >
          British Dragon Boat Racing Association
        </motion.p>

        {/* Logos */}
        <motion.div className="customer-logos">
          {logos.map((logo, index) => (
            <motion.img
              key={index}
              src={logo}
              alt="logo"
              className="logo"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.1, rotateY: 10 }}
            />
          ))}
        </motion.div>

        <motion.button 
          className="meet-customers-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Meet all customers →
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CustomerSection;
