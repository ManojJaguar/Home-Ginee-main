import React, { useState } from "react";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import logo from "../../Assets/logo.png";
import { RiMenu2Line, RiShoppingBagLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Badge from "@mui/material/Badge";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = mobileMenuOpen ? "auto" : "hidden";
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="navBar">
        <div className="logoLinkContainer">
          <div className="logoContainer">
            <Link to="/" onClick={scrollToTop}>
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          <div className="linkContainer">
            <ul>
              <li><Link to="/" onClick={scrollToTop} className="navBtn">HOME</Link></li>
              <li><Link to="/shop" onClick={scrollToTop} className="navBtn">SERVICES</Link></li>
              <li><Link to="/partners" onClick={scrollToTop} className="navBtn">PARTNERS</Link></li>
              <li><Link to="/about" onClick={scrollToTop} className="navBtn">ABOUT</Link></li>
              <li><Link to="/contact" onClick={scrollToTop} className="navBtn">CONTACT</Link></li>
            </ul>
          </div>
        </div>

        {/* Icons */}
        <div className="iconContainer">
          <Link to="/loginSignUp" onClick={scrollToTop}><FaRegUser size={22} /></Link>
          <Link to="/cart" onClick={scrollToTop}>
            <Badge
              badgeContent={cart.items.length || "0"}
              color="primary"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
              <RiShoppingBagLine size={22} />
            </Badge>
          </Link>
          <FiHeart size={22} onClick={scrollToTop} />
        </div>
      </nav>
      {/* Second Row: Search Bar */}
<div className="navBottomRow">
  <div className="searchContainer">
    
    <input
      type="text"
      className="searchInput"
      placeholder="Search home services..."
      aria-label="Search"
    />
    <button className="searchBtn">🔍</button>
  </div>
</div>




      {/* Mobile Navbar */}
      <nav>
        <div className="mobile-nav">
          {mobileMenuOpen ? (
            <MdOutlineClose size={22} onClick={toggleMobileMenu} />
          ) : (
            <RiMenu2Line size={22} onClick={toggleMobileMenu} />
          )}

          <div className="logoContainer">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          <Link to="/cart">
            <Badge
              badgeContent={cart.items.length || "0"}
              color="primary"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
              <RiShoppingBagLine size={22} color="black" />
            </Badge>
          </Link>
        </div>

        <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
          <div className="mobile-menuList">
            <ul>
              <li><Link to="/" onClick={toggleMobileMenu} className="navBtn">HOME</Link></li>
              <li><Link to="/shop" onClick={toggleMobileMenu} className="navBtn">SERVICES</Link></li>
              <li><Link to="/partners" onClick={toggleMobileMenu} className="navBtn">PARTNERS</Link></li>
              <li><Link to="/about" onClick={toggleMobileMenu} className="navBtn">ABOUT</Link></li>
              <li><Link to="/contact" onClick={toggleMobileMenu} className="navBtn">CONTACT</Link></li>
            </ul>
          </div>

          {/* Footer */}
          <div className="mobile-menuFooter">
            <div className="mobile-menuFooterLogin">
              <Link to="/loginSignUp" onClick={toggleMobileMenu}>
                <FaRegUser />
                <p>My Account</p>
              </Link>
            </div>

            <div className="mobile-menuFooterLangCurrency">
              <div className="mobile-menuFooterLang">
                <p>Language</p>
                <select>
                  <option>United States | English</option>
                  <option>Hindi</option>
                  <option>Germany</option>
                  <option>French</option>
                </select>
              </div>
              <div className="mobile-menuFooterCurrency">
                <p>Currency</p>
                <select>
                  <option>$ USD</option>
                  <option>₹ INR</option>
                  <option>€ EUR</option>
                  <option>£ GBP</option>
                </select>
              </div>
            </div>

            <div className="mobile-menuSocial_links">
              <FaFacebookF />
              <FaXTwitter />
              <FaInstagram />
              <FaYoutube />
              <FaPinterest />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
