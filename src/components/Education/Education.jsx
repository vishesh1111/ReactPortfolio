import React from "react";
import "./Education.css";

const Education = () => {
  // Replace these sample entries with your actual education and grades
  const entries = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Universty School Of Information, Communication and Technology (GGSIPU)",
      period: "2025 - 2029",
      grade: "CGPA: 8.85 / 10",
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "MahaRishi Vivekananda Model School Dwarka, New Delhi",
      period: "2018 - 2024",
      grade: "Percentage: 91%",
    },
  ];

  return (
    <section className="education-section">
      <div className="education-container">
        <h3 className="education-heading">Education</h3>
        <ul className="education-list">
          {entries.map((e, idx) => (
            <li key={idx} className="education-item">
              <div className="degree">{e.degree}</div>
              <div className="institution">{e.institution} • {e.period}</div>
              <div className="grade">{e.grade}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;
