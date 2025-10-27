import React, { useState } from "react";
import "./Header.css";
import toast, { Toaster } from "react-hot-toast";

const darkToast = (username) => {
  toast("Welcome!! ", {
    icon: "👏",
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
      fontFamily: "poppins",
    },
  });
};

const Header1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div>
        <div className="header">
          <a onClick={darkToast} className="logo">
            Vishesh
          </a>
          <Toaster />
          
          {/* Hamburger Menu Button */}
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={isMenuOpen ? 'active' : ''}>
            <ul>
              <li>
                <a href="#top" className="home" onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="#introsection" className="Aboutme" onClick={closeMenu}>
                  About me
                </a>
              </li>
              <li>
                <a href="#skills" className="skills" onClick={closeMenu}>
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="mailto:vvishesh53@gmail.com" 
                  className="contact" 
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header1;
