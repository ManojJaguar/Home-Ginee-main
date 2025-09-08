import React from "react";
import "./CollectionBox.css";
import { Link } from "react-router-dom";

const CollectionBox = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="collection">
      {/* Left Box */}
      <div className="collectionLeft">
        <h4 className="col-h3">
          <span>HOME Service </span>Geniee
        </h4>
        <div className="col-link">
          <Link to="/shop" onClick={scrollToTop}>
            <h5>Book Now</h5>
          </Link>
        </div>
      </div>

      {/* Right Box */}
      <div className="collectionRight">
        <div className="collectionTop">
          <h4 className="col-h3">
            <span>Appliances Services</span>
          </h4>
          <div className="col-link">
            <Link to="/shop" onClick={scrollToTop}>
              <h5>Book Now</h5>
            </Link>
          </div>
        </div>

        <div className="collectionBottom">
          {/* Box 1 */}
          <div className="box1">
            <h4 className="col-h3">
              <span>Electrical</span> Services
            </h4>
            <div className="col-link">
              <Link to="/shop" onClick={scrollToTop}>
                <h5>Book Now</h5>
              </Link>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default CollectionBox;
