import React from "react";
import { flexbox } from "@chakra-ui/react";
import { display } from "@mui/system";
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
  return (
    <>
      <div>
        <div className="header">
          <a onClick={darkToast} className="logo">
            Vishesh
          </a>
          <Toaster />
          <nav>
            <ul>
              <li>
                <a href="#top" className="home">
                  Home
                </a>
              </li>
              <li>
                <a href="#introsection" className="Aboutme">
                  About me
                </a>
              </li>
              <li>
                <a href="#skills" className="skills">
                  Skills
                </a>
              </li>
              <li>
                <a href="#" className="contact">
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
