import React from "react";
import "./AboutPage.css";

import about1 from "../../Assets/About/about-1.jpg";
import about2 from "../../Assets/About/about-2.jpg";

import Services from "../../Components/Home/Services/Services";

const AboutPage = () => {
  return (
    <>
      <div className="aboutSection">
        <h2>About Home Geniee</h2>
        <img className="aboutImg" src={about1} alt="About Home Geniee" />
        <div className="aboutContent">
          <h3>Our Story</h3>
          <h4>
            Book trusted home services in minutes—plumbing, electrical, cleaning, and more. 
            Real-time scheduling, verified pros, upfront pricing, and 24/7 support.
          </h4>
          <p>
            <strong>Your Home, Our Care.</strong> From plumbing to painting, cleaning 
            to appliance repair—every service you need is just a tap away. Trusted professionals, 
            transparent pricing, and quick scheduling make home maintenance effortless.
          </p>

          <div className="content1">
            <div className="contentBox">
              <h5>Our Mission</h5>
              <p>
                Fast, trusted home services — book vetted pros in minutes.
              </p>
            </div>
            <div className="contentBox">
              <h5>Our Vision</h5>
              <p>
                Get reliable help for every home task. Plumbing, electrical, cleaning 
                and more — background-checked pros, upfront pricing, on-time service.
              </p>
            </div>
          </div>

          <div className="content2">
            <div className="imgContent">
              <img className="aboutImg" src={about2} alt="Company Info" />
            </div>
            <div className="textContent">
              <h5>The Company</h5>
              <p>
                Keep your home running smoothly with ease. Our platform connects you 
                to background-checked experts for any household need. With real-time 
                booking, flexible scheduling, and secure payments, managing your 
                home has never been simpler.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Services />
    </>
  );
};

export default AboutPage;
