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
      <div id="projects" className="h-screen flex justify-end items-center">
        <div className="max-w-[1240px] w-full lg:w-[40%] mr-20 px-2 py-16">
          <p className="text-xl trakcing-widest uppercase text-[#ff1f45] text-right">
            Projects
          </p>
          <h2 className="py-4 text-right text-[#ff1f45]">What I've Built</h2>
          {/* <div className="w-full h-[400px]">
          <Carousel slideInterval={10000}>
            {projects.map((project) => (
              <div
                key={project.id}
                className="px-10 md:px-20 h-full flex justify-center bg-slate-500 rounded-2xl shadow-inner"
              >
                <img
                  className="h-[100%] w-full md:w-[80%] object-cover"
                  src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                  alt={project.title}
                />
              </div>
            ))}
          </Carousel>
        </div> */}
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4 bg-[#ff738b] p-4 shadow-xl rounded-xl">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col items-center justify-center lg:h-72 w-full shadow-lg rounded-xl group bg-white hover:bg-gradient-to-r from-orange-300 to-[#ff738b] hover:cursor-pointer overflow-hidden"
                onClick={(_e: React.MouseEvent<HTMLDivElement>) =>
                  handleOpenProject(project)
                }
              >
                <div className="w-[100%] h-[60%] image">
                  <img
                    className="object-cover w-auto h-[100%]"
                    src={project.image.src}
                    alt={project.image.alt}
                  />
                </div>
                <div className="text-center p-4 flex-1 flex flex-col items-center justify-center">
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
