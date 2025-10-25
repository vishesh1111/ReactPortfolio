import React from "react";
import "./Projects.css";

const projectData = [
  {
    title: "Opensea-Blockchain Clone",
    link: "https://github.com/vishesh1111/Opensea-Blockchain-Clone",
    desc: "OpenSea Blockchain Clone using MetaMask Wallet Authentication with Sanity Backend.",
    tech: "JavaScript",
    stars: 23,
    forks: 34,
    color: "yellow",
  },
  {
    title: "Profile-UI-Card",
    link: "https://github.com/vishesh1111/Profile-UI-Card",
    desc: "Profile Card built using only HTML and CSS.",
    tech: "CSS",
    stars: 19,
    forks: 11,
    color: "#563d7c",
  },
  {
    title: "WeatherApp",
    link: "https://vishesh1111.github.io/WeatherProject/",
    desc: "Weather app using HTML, CSS, JavaScript, Geolocation API, and Material UI.",
    tech: "JavaScript",
    stars: 34,
    forks: 44,
    color: "yellow",
  },
  {
    title: "Construction WebApp",
    link: "https://vishesh1111.github.io/MSI-CONSTRUCTION/",
    desc: "Construction website built using HTML, CSS, JavaScript, and SCSS.",
    tech: "Scss",
    stars: 11,
    forks: 49,
    color: "Pink",
  },
{
    title: "Portfolio",
    link: "https://vishesh1111.github.io/ReactPortfolio/",
    desc: "React Portfolio Made Using React & TailwindCSS.",
    tech: "TailwindCSS",
    stars: 11,
    forks: 49,
    color: "cyan",
  }
  
];

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="head">
        <span className="cyan">Projects</span>
      </h2>

      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="repo-card" key={index}>
            <div className="card-header">
              <svg
                className="book-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                {project.title}
              </a>
            </div>

            <p className="project-desc">{project.desc}</p>

            <div className="card-footer">
              <div className="tech-info">
                <span
                  className="dot"
                  style={{ backgroundColor: project.color }}
                ></span>
                <span className="tech">{project.tech}</span>
              </div>

              <div className="stats">
                <svg
                  className="star-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  stroke="black"
                  fill="none"
                >
                  <path d="m12 17.844-5.817 3.058 1.111-6.477-4.706-4.587 6.504-.945L12 3l2.908 5.893 6.504.945-4.706 4.587 1.111 6.477z" />
                </svg>
                <p>{project.stars}</p>

                <svg
                  className="fork-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 7.83V12h3a3 3 0 0 0 3-3V7.83a3.001 3.001 0 1 1 2 0V9a5 5 0 0 1-5 5H9v2.17a3.001 3.001 0 1 1-2 0V7.83a3.001 3.001 0 1 1 2 0Z"
                    fillRule="evenodd"
                  />
                </svg>
                <p>{project.forks}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
