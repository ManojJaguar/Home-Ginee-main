import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="heroMain">
      {/* Left Section */}
      <div className="sectionleft">
        <p>Home Services</p>
        <h1>Home - Geniee</h1>
        <span>Book Now – Instant Home Services with 24/7 Support and Fabulous Prizes.</span>
        <div className="heroLink">
          <Link to="/service" onClick={scrollToTop}>
            <h5>Discover More</h5>
          </Link>
        </div>
      </div>
      <div className="chatBotWidget">
  <div className="chatIcon" onClick={() => alert("Chatbot coming soon!")}>
    🤖
  </div>
</div>

      {/* Right Section */}
      <div className="sectionright">
        <img
          src="https://dcassetcdn.com/design_img/3129641/666026/666026_17318496_3129641_bd56ffae_image.jpg"
          alt="Home Services"
          className="heroImage"
        />
      </div>
    </div>
  );
};

export default HeroSection;