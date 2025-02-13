import React from "react";
import { motion } from "framer-motion";
import "../styles/OurClients.css";
import logo1 from "../assets/Logo7.png";
import logo2 from "../assets/Logo1.png";
import logo3 from "../assets/Logo2.png";
import logo4 from "../assets/Logo3.png";
import logo5 from "../assets/Logo4.png";
import logo6 from "../assets/Logo5.png";
import logo7 from "../assets/Logo6.png";

const ClientsSection = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

  return (
    <section className="clients-section">
      <motion.h2 
        className="clients-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Clients
      </motion.h2>
      <motion.p 
        className="clients-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        We have been working with some Fortune 500+ clients
      </motion.p>
      <div className="clients-logos">
        {logos.map((logo, index) => (
          <motion.img
            key={index}
            src={logo}
            alt={`Client Logo ${index + 1}`}
            className="client-logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.2, rotateY: 10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
