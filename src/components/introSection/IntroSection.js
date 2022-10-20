import React from "react";
import "./introSection.css";
import { IconButton } from "@chakra-ui/react";
import img1 from "../assets/img1.png";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from "react-dom";
import ballet from "../assets/ballet.png";

const IntroSection = () => {
  return (
    <div className="content">
      <div className="main">
        <h2 className="heading">
          Hi all, I'm Vishesh
          <span className="wave">👋</span>
        </h2>
        <p className="Content">
          I love software development, Beautiful Frontend and Scalable Websites.
          I know a little bit of Cybersecurtity too! Want to discuss regarding
          any project or just want to say a Hi? I am always available to listen
          you :)
        </p>
        <button>
          {" "}
          <a href="#contact" alt="#" className="button">
            Contact Me
          </a>
        </button>
        <button>
          {" "}
          <a
            href="https://www.buymeacoffee.com/vvishesh53T"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Buy Me A Coffee
          </a>
        </button>
      </div>
      <div className="img">
        <img src={ballet} />
      </div>
    </div>
  );
};

export default IntroSection;
