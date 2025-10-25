import React from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import IntroSection from "./components/introSection/IntroSection";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Header1 from "./components/Header/Header";
import Socials from "./components/Socials/Socials";
import Button from "./components/Button/Button";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <div className="App">
      <>
        <Header1 />
        <IntroSection />
        <Skills />
        <Projects />
        <Socials />
        <Button />
        <Experience />
      </>
    </div>
  );
}

export default App;
