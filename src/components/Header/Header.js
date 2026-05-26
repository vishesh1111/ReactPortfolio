import React, { useState, useEffect } from "react";
import "./Header.css";
import toast, { Toaster } from "react-hot-toast";
import ThemeToggle from "../ThemeToggle";

// Function to show dark-themed toast
const darkToast = () => {
  toast("Welcome!!", {
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

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");
    if (!hasSeenWelcome) {
      darkToast();
      localStorage.setItem("hasSeenWelcome", "true");
    }
  }, []);

  return (
    <>
      <div>
        <div className="header">
          <button type="button" onClick={darkToast} className="logo">
            Vishesh
          </button>
          <Toaster />

          <button
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={isMenuOpen ? "active" : ""}>
            <ul>
              <li>
                <a href="#top" className="home" onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="Aboutme" onClick={closeMenu}>
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
              <li className="theme-toggle-li">
                <ThemeToggle />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header1;
