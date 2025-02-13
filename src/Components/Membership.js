import React from "react";
import { motion } from "framer-motion";
import "../styles/Membership.css";
import Icon1 from "../assets/Icon.png";
import Icon2 from "../assets/Icon1.png";
import Icon3 from "../assets/Icon2.png";

const data = [
  {
    id: 1,
    icon: Icon1,
    title: "Membership Organisations",
    description:
      "Our membership management software provides full automation of membership renewals and payments.",
  },
  {
    id: 2,
    icon: Icon2,
    title: "National Associations",
    description:
      "Our membership management software provides full automation of membership renewals and payments.",
  },
  {
    id: 3,
    icon: Icon3,
    title: "Clubs And Groups",
    description:
      "Our membership management software provides full automation of membership renewals and payments.",
  },
];

const MembershipSection = () => {
  return (
    <motion.div 
      className="membership-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }} // Ensures it animates only once when scrolled into view
    >
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        Manage your entire community in a single system
      </motion.h2>

      <motion.p
        className="subheading"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
        viewport={{ once: true }}
      >
        Who is Netcomm suitable for?
      </motion.p>

      <motion.div 
        className="membership-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
        }}
      >
        {data.map((item) => (
          <motion.div
            key={item.id}
            className="membership-card"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.img
              src={item.icon}
              alt={item.title}
              className="membership-icon"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MembershipSection;
