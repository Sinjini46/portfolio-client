import React from "react";
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Skills from "./Skills";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Education from "./Education";
import Achievements from "./Achievement";
import Contact from "./Contact";
import ScrollButton from "../../components/ScrollButton";
import Footer from "./Footer";
import LeftSider from "./LeftSider";
import { useSelector } from "react-redux";

function Home() {
  const { portfolioData } = useSelector((state) => state.root);
  return (
    <div className="bg-primary min-h-screen" id="#home">
      <Header />
      {portfolioData && (
        <>
          <div className="mt-16 sm:mt-16 px-4 sm:px-0">
            <Intro />
          </div>
          <div className="bg-primary px-5 sm:px-10">
            <About />
            <Skills />
            <Experiences />
            <Projects />
            <Education />
            <Achievements />
            <Contact />
            <ScrollButton />
            <Footer />
            <LeftSider />
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
