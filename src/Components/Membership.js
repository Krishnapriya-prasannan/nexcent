import React from "react";
import "../styles/Membership.css"; // Import the CSS file
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
    <div className="membership-section">
      <h2>Manage your entire community in a single system</h2>
      <p className="subheading">Who is Netcomm suitable for?</p>

      <div className="membership-grid">
        {data.map((item) => (
          <div key={item.id} className="membership-card">
            <img src={item.icon} alt={item.title} className="membership-icon" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipSection;
