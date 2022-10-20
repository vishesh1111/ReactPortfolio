import React from "react";
import "./Skills.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { UilLinux } from "@iconscout/react-unicons";
import { UilJavaScript } from "@iconscout/react-unicons";
import { UilCss3Simple } from "@iconscout/react-unicons";
import { UilGitlab } from "@iconscout/react-unicons";
import { UilDatabase } from "@iconscout/react-unicons";
import { UilCodeBranch } from "@iconscout/react-unicons";
import { UilVuejs } from "@iconscout/react-unicons";

const Skills = () => {
  return (
    <div className="container">
      <div className="img">
        <img src="https://i.giphy.com/media/7wA0YhMXvDBhTckOGM/source.gif"></img>
      </div>

      <div className="column-2">
        <h2>
          <span className="pink">What I Do?</span>
        </h2>
        <h3 className="h3">
          CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
        </h3>

        <div className="dev-icons">
          <ul>
            <li className="react">
              <FaReact />
              <p>React</p>
            </li>

            <li className="javascript">
              <UilJavaScript />
              <p>Javascript</p>
            </li>

            <li className="linux">
              <UilLinux />
              <p>Linux</p>
            </li>

            <li className="css">
              <UilCss3Simple />
              <p>CSS</p>
            </li>

            <li className="git">
              <UilGitlab />
              <p>Gitlab</p>
            </li>

            <li className="database">
              <UilDatabase />
              <p>Sql-Database</p>
            </li>

            <li className="git">
              <UilCodeBranch />
              <p>git</p>
            </li>

            <li className="Vue">
              <UilVuejs />
              <p>Vue</p>
            </li>
          </ul>
        </div>

        <div className="info">
          <p className="lines">
            <img
              className="thunder"
              src="https://twemoji.maxcdn.com/2/72x72/26a1.png"
            />{" "}
            Develop highly interactive Front end / User Interfaces for your web
            and mobile applications
          </p>

          <p className="lines">
            <img
              className="thunder"
              src="https://twemoji.maxcdn.com/2/72x72/26a1.png"
            />{" "}
            Integration of third party services such as Firebase/ AWS / Digital
            Ocean
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
