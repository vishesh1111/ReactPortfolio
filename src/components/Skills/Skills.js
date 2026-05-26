import React from "react";
import {
  FaReact, FaNodeJs, FaVuejs, FaAngular, FaTools, FaServer, FaMobile
} from "react-icons/fa";
import {
  SiJavascript, SiTypescript, SiNextdotjs, SiRedux,
  SiTailwindcss, SiStorybook, SiFramer
} from "react-icons/si";
import {
  UilJavaScript,
  UilBracketsCurly,
  UilWebGrid,
  UilPadlock
} from "@iconscout/react-unicons";
import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Languages & Concepts",
      skills: [
        { name: "JavaScript (ES6+)", icon: <SiJavascript />, desc: "ES6+ features, closures, async/await, event loop" },
        { name: "TypeScript", icon: <SiTypescript />, desc: "Types, generics, decorators, utility types" },
        { name: "DOM Manipulation", icon: <UilBracketsCurly />, desc: "DOM & Virtual DOM expertise" }
      ]
    },
    {
      title: "Frontend Frameworks",
      skills: [
        { name: "React.js", icon: <FaReact />, desc: "Hooks, Context API, React Query" },
        { name: "Next.js", icon: <SiNextdotjs />, desc: "SSR, SSG, ISR, Routing" },
        { name: "Vue.js", icon: <FaVuejs />, desc: "Vue ecosystem & reactivity" },
        { name: "Angular", icon: <FaAngular />, desc: "Component architecture" }
      ]
    },
    {
      title: "Styling & Design",
      skills: [
        { name: "TailwindCSS", icon: <SiTailwindcss />, desc: "Utility-first CSS" },
        { name: "Design Systems", icon: <SiStorybook />, desc: "Storybook, shadcn/ui, Radix UI" },
        { name: "Animations", icon: <SiFramer />, desc: "Framer Motion, GSAP" }
      ]
    },
    {
      title: "State & Performance",
      skills: [
        { name: "State Management", icon: <SiRedux />, desc: "Redux Toolkit, Zustand, MobX" },
        { name: "Web Performance", icon: <FaTools />, desc: "Lazy loading, bundle analysis" }
      ]
    },
    {
      title: "Web Standards & Security",
      skills: [
        { name: "Web APIs", icon: <FaServer />, desc: "Workers, WebSockets, IndexedDB" },
        { name: "Security", icon: <UilPadlock />, desc: "XSS, CSRF, CSP, sanitization" },
        { name: "PWA", icon: <FaMobile />, desc: "Progressive Web Apps" }
      ]
    },
    {
      title: "Backend & DevOps",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, desc: "Express, NestJS, API design" },
        { name: "Databases", icon: <UilWebGrid />, desc: "MongoDB, PostgreSQL, Redis" },
        { name: "Server Management", icon: <FaServer />, desc: "AWS, Digital Ocean, Docker" }
      ]
    }
  ];

  const currentPath = window.location.hash;
  const isSkillsPage = currentPath === '#skills';

  // Skills page — 2 column grid with cards
  if (isSkillsPage) {
    return (
      <div className="skills-page">
        <h1 className="skills-heading">Technical Skills</h1>
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category">
              <h2 className="category-title">{category.title}</h2>
              <div className="skills-list-vertical">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-card" title={skill.desc}>
                    <div className="skill-card-icon">{skill.icon}</div>
                    <div className="skill-card-info">
                      <h3 className="skill-card-name">{skill.name}</h3>
                      <p className="skill-card-desc">{skill.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // "What I Do?" inline section on homepage
  return (
    <div className="skills-container">
      <div className="skills-image">
        <img
          src="https://i.giphy.com/media/7wA0YhMXvDBhTckOGM/source.gif"
          alt="developer animation"
        />
      </div>
      <div className="skills-content">
        <h2><span className="pink">What I Do?</span></h2>
        <p className="skills-title">CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
        <div className="dev-icons">
          <ul>
            {[FaReact, UilJavaScript, SiNextdotjs, SiTypescript, SiTailwindcss, FaNodeJs].map((Icon, i) => (
              <li key={i}><Icon /></li>
            ))}
          </ul>
        </div>
        <div className="line">⚡ I develop highly interactive Frontend / User Interfaces for web and mobile applications.</div>
        <div className="line">⚡ Integration of third-party services such as Firebase, AWS, and Digital Ocean.</div>
      </div>
    </div>
  );
};

export default Skills;
