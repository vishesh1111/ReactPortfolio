import React from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Experience from "../src/components/Experience/Experience";
import IntroSection from "./components/introSection/IntroSection";
import Skills from "../src/components/Skills/Skills";
import Projects from "../src/components/Projects/Projects";
import Header1 from "./components/Header/Header";
import Socials from "../src/components/Socials/Socials";
import Button from "../src/components/Button/Button"

function App() {
  return (
    <div className="App">
      <>
        <Header1 />
        <IntroSection />
        <Skills />
        <Experience />
        <Projects />
        <Socials />
        <Button />
      </>
    </div>
  );
}

export default App;
