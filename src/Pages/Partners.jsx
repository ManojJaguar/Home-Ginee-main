import React from "react";
import "./Partners.css";
import logo from "../Assets/logo.png";

const Partners = () => {
  return (
    <div className="partners-wrapper">
      {/* LEFT SIDE */}
      <div className="partners-left">
        <h2 className="section-title">🤝 Partner With Us</h2>

        <div className="partner-card">
          <img src={logo} alt="Home Genie" className="partner-logo" />
          <h3>Home Genie Partnership</h3>
          <p>
            Become a proud Homegeniee Partner & earn up to ₹60,000/month!
          </p>
          <button className="learn-btn">Learn More</button>
        </div>

        <form className="partner-form">
          <h3>📋 Apply Now</h3>
          <div className="form-group">
  <input type="text" placeholder="Full Name" required />
  <input type="tel" placeholder="Phone Number" required />
  <input type="email" placeholder="Email Address" required />

  {/* Services Offered Dropdown */}
  <select className="services-dropdown" required>
    <option value="">-- Select Service --</option>
    <option value="caterers">🍽️ Refrigirator Services</option>
    <option value="decorators">🎉 AC Services</option>
    <option value="costumes">👗 Washing Machine Services</option>
    <option value="computer">💻 Electric Services</option>
    <option value="camera">📷 Plumber service</option>
     <option value="caterers">🍽️ Home cleaning service</option>
    <option value="decorators">🎉 AC Services</option>
    <option value="costumes">👗 Washing Machine Services</option>
    <option value="computer">💻 Electric Services</option>
    <option value="camera">📷 Plumber service</option>
  </select>

  <input type="text" placeholder="Address" required />
  <input type="text" placeholder="City" required />
  <input type="text" placeholder="Pincode" required />
</div>


          <div className="terms">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I agree to the <a href="/terms">Terms & Conditions</a>
            </label>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>

      {/* RIGHT SIDE */}
      <div className="partners-right">
        <h2 className="section-title">📍 Find Us Here</h2>

       <div className="map-container">
  <iframe
    title="Home Genie Location - Uma Admirality Bangalore"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.753872654778!2d77.59890747454694!3d12.926527116071665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15a523f7c79f%3A0x9a5b7e5607e0a7d0!2sUma%20Admiralty!5e0!3m2!1sen!2sin!4v1725718938726!5m2!1sen!2sin"
    width="100%"
    height="250"
    style={{ border: "0", borderRadius: "12px" }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</div>

        <div className="company-info">
          <h3>🏢 Company Info</h3>
          <p>Jaya nagar 40 cross road, Bangalore south, Karnataka 560041</p>
          <p>Bengaluru - 560010</p>
          <p>Email: <a href="homegenieeservice@gmail.com">homegenieeservice@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default Partners;
