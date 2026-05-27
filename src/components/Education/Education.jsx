import React from "react";
import "./Education.css";

const GraduationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 10 12 5 2 10l10 5 10-5z" />
    <path d="M6 12v5c3 1.5 9 1.5 12 0v-5" />
    <path d="M22 10v6" />
  </svg>
);

const SchoolIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 21h18" />
    <path d="M5 21V7l7-4 7 4v14" />
    <path d="M9 21v-6h6v6" />
    <path d="M9 9h.01M12 9h.01M15 9h.01" />
  </svg>
);

const Education = () => {
  const entries = [
    {
      degree: "B.Tech in Computer Science",
      institution:
        "University School Of Information, Communication and Technology (GGSIPU)",
      period: "2025 — 2029",
      grade: "CGPA: 8.85 / 10",
      icon: <GraduationIcon />,
      // Per-card gradient border palette
      grad: { start: "#7fee64", end: "#00d4ff", glow: "127,238,100", dot: "#7fee64", dotShadow: "rgba(127,238,100,0.5)" },
      accent: "green",
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "MahaRishi Vivekananda Model School Dwarka, New Delhi",
      period: "2018 — 2024",
      grade: "Percentage: 91%",
      icon: <SchoolIcon />,
      grad: { start: "#ff6b35", end: "#ff2d78", glow: "255,107,53", dot: "#ff6b35", dotShadow: "rgba(255,107,53,0.5)" },
      accent: "orange",
    },
  ];

  return (
    <section className="education-section">
      <div className="education-container">
        <h3 className="education-heading">Education</h3>

        <ul className="education-timeline">
          {entries.map((e, idx) => {
            const style = {
              "--grad-start": e.grad.start,
              "--grad-end": e.grad.end,
              "--glow-rgb": e.grad.glow,
              "--dot-color": e.grad.dot,
              "--dot-shadow": e.grad.dotShadow,
            };
            return (
              <li key={idx} className="education-item" data-accent={e.accent} style={style}>
                <span className="education-node" aria-hidden="true" />

                <div className="education-card">
                  <div className="education-card-inner">
                    <div className="education-card-head">
                      <span className="education-icon-box" aria-hidden="true">
                        {e.icon}
                      </span>
                      <div className="education-card-titles">
                        <div className="education-degree">{e.degree}</div>
                        <div className="education-institution">
                          {e.institution} <span className="education-sep">•</span> {e.period}
                        </div>
                      </div>
                      <span className="education-grade-pill">{e.grade}</span>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Education;
