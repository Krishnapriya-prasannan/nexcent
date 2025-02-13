import React from "react";
import { motion } from "framer-motion";
import "../styles/Blogs.css"; // Import CSS
import img1 from "../assets/img1.png"; // Import images
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const blogPosts = [
  {
    id: 1,
    image: img1,
    title: "Creating Streamlined Safeguarding Processes with OneRen",
    link: "#",
  },
  {
    id: 2,
    image: img2,
    title: "What are your safeguarding responsibilities and how can you manage them?",
    link: "#",
  },
  {
    id: 3,
    image: img3,
    title: "Revamping the Membership Model with Triathlon Australia",
    link: "#",
  },
];

const BlogSection = () => {
  return (
    <motion.section 
      className="blog-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ amount: 0.2 }} // Ensures animation replays when in view
    >
      <motion.div 
        className="blog-header"
        initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <h2>Caring is the new marketing</h2>
        <p>
          The Nextcent blog is the best place to read about the latest membership insights,
          trends, and more. See who's joining the community, read about how our community
          are increasing their membership income and lot's more.
        </p>
      </motion.div>

      {/* Blog Cards */}
      <motion.div 
        className="blog-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
        }}
      >
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            className="blog-card"
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.9, rotateX: 10 },
              visible: { opacity: 1, y: 0, scale: 1, rotateX: 0 }
            }}
            whileHover={{
              scale: 1.05,
              rotateX: -5,
              boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.2)",
              transition: { duration: 0.3, ease: "easeInOut" }
            }}
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
              ease: "easeInOut",
            }}
          >
            <motion.img
              src={post.image}
              alt={post.title}
              className="blog-image"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            />
            <div className="blog-content">
              <h3>{post.title}</h3>
              <a href={post.link} className="blog-link">Readmore →</a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default BlogSection;
