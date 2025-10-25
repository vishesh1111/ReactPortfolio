import React from "react";
import "./Skills.css";
import { FaReact } from "react-icons/fa";
import {
  UilLinux,
  UilJavaScript,
  UilCss3Simple,
  UilGitlab,
  UilDatabase,
  UilCodeBranch,
  UilVuejs,
} from "@iconscout/react-unicons";

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-image">
        <img
          src="https://i.giphy.com/media/7wA0YhMXvDBhTckOGM/source.gif"
          alt="developer animation"
        />
      </div>

      <div className="skills-content">
        <h2>
          <span className="pink">What I Do?</span>
        </h2>
        <h3 className="skills-title">
          CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
        </h3>

        <div className="dev-icons">
          <ul>
            <li><FaReact /><p>React</p></li>
            <li><UilJavaScript /><p>JavaScript</p></li>
            <li><UilLinux /><p>Linux</p></li>
            <li><UilCss3Simple /><p>CSS</p></li>
            <li><UilGitlab /><p>GitLab</p></li>
            <li><UilDatabase /><p>SQL</p></li>
            <li><UilCodeBranch /><p>Git</p></li>
            <li><UilVuejs /><p>Vue</p></li>
          </ul>
        </div>

        <div className="info">
          <p className="line">
            <img
              className="thunder"
              src="https://twemoji.maxcdn.com/2/72x72/26a1.png"
              alt="thunder icon"
            />
            I develop highly interactive Frontend / User Interfaces for web and mobile applications.
          </p>

          <p className="line">
            <img
              className="thunder"
              src="https://twemoji.maxcdn.com/2/72x72/26a1.png"
              alt="thunder icon"
            />
            Integration of third-party services such as Firebase, AWS, and Digital Ocean.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
