import { projects } from "../../data/projectsData";
import {
  openProjectModal,
  closeProjectModal,
  setProjectData,
} from "../../features/projectSlice";
import ProjectModal from "../ProjectModal";
import { RootState } from "@component/store/store";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import React, { useState } from "react";
import { IconType } from "react-icons";
import { useSelector, useDispatch } from "react-redux";

const Projects = () => {
  const dispatch = useDispatch();
  const handleOpenProject = (project: any) => {
    dispatch(setProjectData(project));
    dispatch(openProjectModal());
  };

  return (
    <>
      <div
        id="projects"
        className="md:h-screen flex justify-end md:mt-[100px] z-20"
      >
        <div className="mt-[50px] md:mt-0 h-full max-w-[1240px] w-[90%] mx-auto lg:mx-0 lg:w-[50%] lg:mr-20 px-2 z-20 flex flex-col justify-center items-end">
          <p className="text-xl trakcing-widest uppercase text-[#eb4971] text-right drop-shadow-[0_2px_1.2px_rgba(255,255,255)]">
            Projects
          </p>
          <h2 className="py-2 text-right text-[#eb4971] drop-shadow-[0_2px_1.2px_rgba(255,255,255)]">
            What I&apos;ve Built
          </h2>
          <div className="mt-2 md:mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4 bg-[#ff738b] bg-opacity-70 p-4 shadow-xl rounded-xl">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col items-center justify-center w-full shadow-lg rounded-xl group bg-white hover:bg-gradient-to-r from-orange-300 to-yellow-200 hover:cursor-pointer overflow-hidden min-h-[250px]"
                onClick={() => handleOpenProject(project)}
              >
                <div className="w-[101%] image">
                  <img
                    className="object-cover w-full h-[100%]"
                    src={project.image.src}
                    alt={project.image.alt}
                  />
                </div>
                <div className="text-center p-4 flex-1 flex flex-col items-center justify-center text-sm lg:text-md ">
                  <div>{project.title}</div>
                  <div className="click mt-10 hidden font-bold">
                    Click for details
                  </div>
                </div>
                <style>{`.group:hover .image {display: none;}
                      .group:hover .click {display: block;}`}</style>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
