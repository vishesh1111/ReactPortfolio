import React, { useState, useEffect } from "react";
import IntroSection from "./components/introSection/IntroSection";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Header1 from "./components/Header/Header";
import Socials from "./components/Socials/Socials";
import Button from "./components/Button/Button";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Chatbot from "./components/Chatbot/Chatbot";

function App() {
  const [currentPage, setCurrentPage] = useState('main');
  const [showCountdown, setShowCountdown] = useState(true);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#about') {
        setCurrentPage('about');
      } else if (window.location.hash === '#skills') {
        setCurrentPage('skills');
      } else {
        setCurrentPage('main');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <Education />;
      case 'skills':
        return <Skills />;
      default:
        return (
          <>
            <IntroSection />
            <Skills />
            <Projects />
            <Socials />
            <Button />
            <Experience />
            <Chatbot />
          </>
        );
    }
  };

  return (
    <>
      {showCountdown ? (
        <LoadingScreen onComplete={() => setShowCountdown(false)} />
      ) : (
        <div className="App">
          <Header1 />
          {renderPage()}
        </div>
      )}
    </>
  );
}

export default App;
