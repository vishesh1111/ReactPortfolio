import React from "react";
import { 
  FaReact, FaNodeJs, FaVuejs, FaAngular, FaGitAlt, FaTools, FaSass, FaServer, FaMobile
} from "react-icons/fa";
import { 
  SiJavascript, SiTypescript, SiNextdotjs, SiRedux, 
  SiTailwindcss, SiStorybook, SiJest, SiCypress, 
  SiWebpack, SiVite, SiFramer
} from "react-icons/si";
import {
  UilJavaScript,
  UilBracketsCurly,
  UilWebGrid,
  UilLayerGroup,
  UilPadlock
} from "@iconscout/react-unicons";

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

  if (isSkillsPage) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Technical Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h2 className="text-xl font-semibold mb-3">{category.title}</h2>
              <div className="space-y-2">
                {category.skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 border rounded hover:bg-gray-100" title={skill.desc}>
                    <div className="text-2xl">{skill.icon}</div>
                    <div>
                      <h3 className="font-medium">{skill.name}</h3>
                      <p className="text-sm text-gray-600">{skill.desc}</p>
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

  return (
    <div className="flex flex-col md:flex-row p-6 items-center">
      <div className="mb-6 md:mb-0 md:mr-6">
        <img
          className="w-64 h-64 object-cover rounded-full"
          src="https://i.giphy.com/media/7wA0YhMXvDBhTckOGM/source.gif"
          alt="developer animation"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-2"><span className="text-pink-500">What I Do?</span></h2>
        <h3 className="mb-4 font-semibold">CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</h3>
        <div className="flex flex-wrap gap-4 mb-4">
          {[FaReact, UilJavaScript, SiNextdotjs, SiTypescript, SiTailwindcss, FaNodeJs].map((Icon, i) => (
            <div key={i} className="flex flex-col items-center text-xl">
              <Icon />
            </div>
          ))}
        </div>
        <div className="space-y-2 text-gray-700">
          <p className="flex items-center gap-2">
            ⚡ I develop highly interactive Frontend / User Interfaces for web and mobile applications.
          </p>
          <p className="flex items-center gap-2">
            ⚡ Integration of third-party services such as Firebase, AWS, and Digital Ocean.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
