"use client";

import { useEffect} from "react";
import Hero from "./components/Hero";
import React from "react";
// import Lenis from "lenis";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import PreLoader from "./components/preLoader";
import { AnimatePresence } from "framer-motion";

const Home = () => {

  
  const [introFinished, setIntroFinished] = React.useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIntroFinished(true);
      document.body.style.cursor = 'default';
      window.scrollTo(0, 0);
    }, 4500);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeoutId);
  })



  return (
    <>
      <AnimatePresence mode='wait'>
        {!introFinished && <PreLoader />}
      </AnimatePresence>
      {introFinished &&
        <>
          <Hero />
          <Skills />
          <Contact />
        </>
      }
    </>
  );
};

export default Home;

