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
import React from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const projectData = useSelector(
    (state: RootState) => state.project.projectData
  );
  const isOpen = useSelector((state: RootState) => state.project.isOpen);

  return (
    <>
      <Head>
        <title>Esther SH Choi</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Esther's Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Esther's Portfolio" />
        <meta property="twitter:title" content="Esther's Portfolio" />

        <meta
          property="og:image"
          content="https://i.ibb.co/HdvpZXd/Screen-Shot-2023-04-06-at-10-01-36-PM.png"
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/HdvpZXd/Screen-Shot-2023-04-06-at-10-01-36-PM.png"
        />
        <meta property="og:image:type" content="image/jpg" />

        <meta
          property="og:description"
          content="Welcome to my virtual room, where you can learn more about me and what I can do!"
        />
        <meta
          name="twitter:description"
          content="Welcome to my virtual room, where you can learn more about me and what I can do!"
        />
        <meta property="og:url" content="https://www.esther-choi.com/" />
      </Head>
      <div className="h-full w-full fixed top-0 z-0 lg:block">
        <CanvasContainer />
      </div>
      <div className="h-full flex flex-col">
        <div className="">
          <Navbar />
        </div>
        <div className="h-screen w-full flex-1 z-20">
          <Main />
          <About />
          <Skills />
          <Projects />
          <Contact />
          {isOpen && projectData && <ProjectModal />}
          <style>
            {isOpen ? `body {overflow: hidden;}` : "body {overflow: unset;}"}
          </style>
        </div>
        <ScrollDown />
      </div>
    </>
  );
}
