import React from "react";
import "../styles/OurClients.css"; // Import styles
import logo1 from "../assets/logo.png";
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
      <h2 className="clients-title">Our Clients</h2>
      <p className="clients-subtitle">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="clients-logos">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Client Logo ${index + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
