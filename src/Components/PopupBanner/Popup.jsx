import React, { useState } from "react";
import "./Popup.css";

// Import your popup background image
import popupImg from "../../Assets/logo.png";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleClose = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 300);
  };

  return (
    showPopup && (
      <div className="popup-overlay">
        <div className={`popup-content ${fadeOut ? "fade-out" : ""}`}>
          <button className="close-button" onClick={handleClose}>
            ×
          </button>

          {/* Left side with background image */}
          <div
            className="popup-left"
            style={{
              background: `url(${popupImg}) center center no-repeat`,
              backgroundSize: "contain",
            }}
          ></div>

          {/* Right side */}
          <div className="popup-right">
            <h2 className="popup-heading">Home Genie Services 24/7</h2>
            <p className="popup-text">
              Join our Home Genie App to get the latest updates on home services.
            </p>

            <form className="popup-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
