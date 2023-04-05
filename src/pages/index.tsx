import ProjectModal from "../components/ProjectModal";
import About from "@component/components/About";
import Contact from "@component/components/Contact";
import Main from "@component/components/Main";
import Navbar from "@component/components/Navbar";
import Projects from "@component/components/Projects";
import ScrollDown from "@component/components/ScrollDown";
import Skills from "@component/components/Skills";
import CanvasContainer from "@component/components/canvas/CanvasContainer";
import { RootState } from "@component/store/store";
import Head from "next/head";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const projectData = useSelector(
    (state: RootState) => state.project.projectData
  );
  const isOpen = useSelector((state: RootState) => state.project.isOpen);

  function disableScroll() {
    // Get the current page scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;

    // if any scroll is attempted,
    // set this to the previous value
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }

  function enableScroll() {
    window.onscroll = function () {};
  }

  useEffect(() => {
    !isOpen ? enableScroll() : disableScroll();
  }, [isOpen]);

  return (
    <>
      <Head>
        <title>Esther SH Choi</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-full fixed top-0 z-0 hidden lg:block">
        <CanvasContainer />
      </div>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {isOpen && projectData && <ProjectModal />}
      <ScrollDown />
    </>
  );
}
