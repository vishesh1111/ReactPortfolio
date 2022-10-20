import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="head">
        <span className="cyan">Projects</span>
      </h2>
      <div
        className="projects-card"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        {/*1st card */}
        <div className="repo-card" data-aos="fade-right">
          <svg
            style={{
              marginTop: "18px",
              marginBottom: "-11px",
              marginLeft: "13px",
            }}
            className="svg1"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-book"
          >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
          <a
            href="https://github.com/vishesh1111/Opensea-Blockchain-Clone"
            target="blank"
          >
            <span
              classname="subproject"
              style={{
                display: "grid",
                fontWeight: "700",
                color: "inherit",
                color: "blue",
                textDecoration: "none",
                flexDirection: "column",
                justifyContent: "center",
                marginTop: "-11px",
                marginRight: "412px",
              }}
            >
              Opensea-BlockChain Clone{" "}
            </span>
          </a>

          <p
            style={{
              justifyContent: "center",
              marginTop: "7px",
              marginLeft: "22px",
              fontFamily: "poppins",
            }}
          >
            Open-sea Blockchain Clone Using MetaMask Wallet Authentication With
            Sanity Back-end
          </p>
          <span className="dot"></span>
          <span
            style={{
              display: "grid",
              alignItems: "center",
              marginTop: "-1px",
              marginRight: "494px",
              marginLeft: "33px",
              fontFamily: "poppins",
              marginBottom: "15px",
            }}
          >
            Javascript
            <svg
              className="starsvg"
              width="21"
              height="21"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-labelledby="starIconTitle"
              stroke="#000"
              stroke-linecap="square"
              fill="none"
              color="#000"
            >
              <path d="m12 17.844-5.817 3.058 1.111-6.477-4.706-4.587 6.504-.945L12 3l2.908 5.893 6.504.945-4.706 4.587 1.111 6.477z" />
            </svg>
            <p
              style={{
                marginTop: "-25px",
                marginLeft: "107px",
                fontSize: "14px",
              }}
            >
              23
            </p>
            <svg
              style={{ marginTop: "-21px", marginLeft: "140px" }}
              width="21"
              height="21"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 7.83V12h3a3 3 0 0 0 3-3V7.83a3.001 3.001 0 1 1 2 0V9a5 5 0 0 1-5 5H9v2.17a3.001 3.001 0 1 1-2 0V7.83a3.001 3.001 0 1 1 2 0ZM8 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8-14a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM8 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                fill-rule="evenodd"
              />
            </svg>
            <p
              style={{
                marginTop: "-22px",
                marginLeft: "163px",
                fontSize: "14px",
              }}
            >
              34
            </p>
          </span>
        </div>
      </div>

      {/* 2nd card*/}

      <div
        className="projects-card"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div
          className="repo-card"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <svg
            style={{
              marginTop: "18px",
              marginBottom: "-11px",
              marginLeft: "13px",
            }}
            className="svg1"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-book"
          >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
          <a
            href="https://github.com/vishesh1111/Profile-UI-Card"
            target="blank"
          >
            <span
              classname="subproject"
              style={{
                display: "grid",
                fontWeight: "700",
                color: "inherit",
                color: "blue",
                textDecoration: "none",
                flexDirection: "column",
                justifyContent: "center",
                marginTop: "-11px",
                marginRight: "495px",
              }}
            >
              Profile-UI-Card{" "}
            </span>
          </a>

          <p
            style={{
              justifyContent: "center",
              marginTop: "7px",
              marginLeft: "22px",
              fontFamily: "poppins",
            }}
          >
            Using HTML And CSS Only
          </p>
          <span className="dot2"></span>
          <span
            style={{
              display: "grid",
              alignItems: "center",
              marginTop: "-1px",
              marginRight: "494px",
              marginLeft: "33px",
              fontFamily: "poppins",
              marginBottom: "15px",
            }}
          >
            CSS
            <svg
              className="starsvg"
              width="21"
              height="21"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-labelledby="starIconTitle"
              stroke="#000"
              stroke-linecap="square"
              fill="none"
              color="#000"
            >
              <path d="m12 17.844-5.817 3.058 1.111-6.477-4.706-4.587 6.504-.945L12 3l2.908 5.893 6.504.945-4.706 4.587 1.111 6.477z" />
            </svg>
            <p
              style={{
                marginTop: "-25px",
                marginLeft: "107px",
                fontSize: "14px",
              }}
            >
              19
            </p>
            <svg
              style={{ marginTop: "-21px", marginLeft: "140px" }}
              width="21"
              height="21"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 7.83V12h3a3 3 0 0 0 3-3V7.83a3.001 3.001 0 1 1 2 0V9a5 5 0 0 1-5 5H9v2.17a3.001 3.001 0 1 1-2 0V7.83a3.001 3.001 0 1 1 2 0ZM8 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8-14a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM8 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                fill-rule="evenodd"
              />
            </svg>
            <p
              style={{
                marginTop: "-22px",
                marginLeft: "163px",
                fontSize: "14px",
              }}
            >
              11
            </p>
          </span>
        </div>
      </div>

      {/*3th Card */}
      <div
        className="projects-card"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div
          className="repo-card"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <svg
            style={{
              marginTop: "18px",
              marginBottom: "-11px",
              marginLeft: "13px",
            }}
            className="svg1"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-book"
          >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>

          <a href="https://github.com/vishesh1111/Tesla-CLone" target="blank">
            <span
              classname="subproject"
              style={{
                display: "grid",
                fontWeight: "700",
                color: "inherit",
                color: "blue",
                textDecoration: "none",
                flexDirection: "column",
                justifyContent: "center",
                marginTop: "-11px",
                marginRight: "527px",
              }}
            >
              Tesla Clone{" "}
            </span>
          </a>

          <p
            style={{
              justifyContent: "center",
              marginTop: "7px",
              marginLeft: "22px",
              fontFamily: "poppins",
            }}
          >
            Using HTML And CSS Only
          </p>
          <span className="dot"></span>
          <span
            style={{
              display: "grid",
              alignItems: "center",
              marginTop: "-1px",
              marginRight: "494px",
              marginLeft: "33px",
              fontFamily: "poppins",
              marginBottom: "15px",
            }}
          >
            Javascript
            <svg
              className="starsvg"
              width="21"
              height="21"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-labelledby="starIconTitle"
              stroke="#000"
              stroke-linecap="square"
              fill="none"
              color="#000"
            >
              <path d="m12 17.844-5.817 3.058 1.111-6.477-4.706-4.587 6.504-.945L12 3l2.908 5.893 6.504.945-4.706 4.587 1.111 6.477z" />
            </svg>
            <p
              style={{
                marginTop: "-25px",
                marginLeft: "107px",
                fontSize: "14px",
              }}
            >
              34
            </p>
            <svg
              style={{ marginTop: "-21px", marginLeft: "140px" }}
              width="21"
              height="21"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 7.83V12h3a3 3 0 0 0 3-3V7.83a3.001 3.001 0 1 1 2 0V9a5 5 0 0 1-5 5H9v2.17a3.001 3.001 0 1 1-2 0V7.83a3.001 3.001 0 1 1 2 0ZM8 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8-14a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM8 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                fill-rule="evenodd"
              />
            </svg>
            <p
              style={{
                marginTop: "-22px",
                marginLeft: "163px",
                fontSize: "14px",
              }}
            >
              44
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
