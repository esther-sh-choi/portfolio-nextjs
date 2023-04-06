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
        className="md:h-screen flex justify-end md:items-center z-20"
      >
        <div className="max-w-[1240px] w-[90%] mx-auto lg:w-[40%] lg:mr-20 px-2 py-16 z-20">
          <p className="text-xl trakcing-widest uppercase text-[#ff1f45] text-right">
            Projects
          </p>
          <h2 className="py-4 text-right text-[#ff1f45]">What I've Built</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4 bg-[#ff738b] bg-opacity-70 p-4 shadow-xl rounded-xl">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col items-center justify-center lg:h-72 w-full shadow-lg rounded-xl group bg-white hover:bg-gradient-to-r from-orange-300 to-[#ff738b] hover:cursor-pointer overflow-hidden"
                onClick={(_e: React.MouseEvent<HTMLDivElement>) =>
                  handleOpenProject(project)
                }
              >
                <div className="w-[101%] image">
                  <img
                    className="object-cover h-[100%]"
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
