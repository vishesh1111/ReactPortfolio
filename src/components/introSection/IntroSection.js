import React from "react";
import "./introSection.css";
import ballet from "../assets/ballet.png";

const IntroSection = () => {
  return (
    <div className="content">
      <div className="main">
        <h2 className="heading">
          Hi all, I'm Vishesh <span className="wave">👋</span>
        </h2>

        <p className="Content">
          I love software development, Beautiful Frontend and Scalable Websites.
          I know a little bit of Cybersecurity too! Want to discuss regarding
          any project or just want to say hi? I’m always available to listen to you :)
        </p>

        <div className="buttons">
          <a href="mailto:vvishesh53@gmail.com" className="button">
            Contact Me
          </a>

          <a
            href="https://www.buymeacoffee.com/vvishesh53T"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Buy Me A Coffee
          </a>
        </div>
      </div>

      <div className="img">
        <img src={ballet} alt="Illustration" />
      </div>
    </div>
  );
};

export default IntroSection;
