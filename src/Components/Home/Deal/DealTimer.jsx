import React from "react";
import { Link } from "react-router-dom";
import "./DealTimer.css";

const DealTimer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="mainDeal">
      <div className="dealTimer">
        <div className="dealTimerMainContent">
          <div className="dealTimeContent">
            <div className="dealTimeLink">
              <Link to="/shop" onClick={scrollToTop}>
              </Link>
            </div>
          </div>
          {/* Timer removed, you can optionally keep the space for design */}
        </div>
      </div>
    </div>
  );
};

export default DealTimer;
