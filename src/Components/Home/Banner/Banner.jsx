import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="banner">
      <div className="bannerLeft">
        <h6 className="bannerh6">Welcome to Our Services</h6>
        <h3 className="bannerh3">Get Home Services Instantly</h3>
        <h5 className="bannerh5">
          <Link to="/shop" onClick={scrollToTop} className="bookButton">
            Book Now
          </Link>
        </h5>
      </div>
      <div className="bannerRight">
        <h6 className="bannerh6">Quality Services</h6>
        <h3 className="bannerh3">Available 24/7</h3>
        <h5 className="bannerh5">
          <Link to="/shop" onClick={scrollToTop} className="bookButton">
            Book Now
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default Banner;
