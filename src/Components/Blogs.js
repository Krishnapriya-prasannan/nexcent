import React from "react";
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
    <section className="blog-section">
      <div className="blog-header">
        <h2>Caring is the new marketing</h2>
        <p>
          The Nextcent blog is the best place to read about the latest membership insights,
          trends, and more. See who's joining the community, read about how our community
          are increasing their membership income and lot's more.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="blog-container">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h3>{post.title}</h3>
              <a href={post.link} className="blog-link">Readmore →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
