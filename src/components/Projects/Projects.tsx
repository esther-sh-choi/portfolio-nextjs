import { projects } from "../../data/projectsData";
import { openProjectModal, setProjectData } from "../../features/projectSlice";
import React from "react";
import { GoTriangleDown } from "react-icons/go";
import { useDispatch } from "react-redux";

const Projects = () => {
  const dispatch = useDispatch();
  const handleOpenProject = (project: any) => {
    dispatch(setProjectData(project));
    dispatch(openProjectModal());
  };

  return (
    <div
      id="projects"
      className="h-[100vh] flex justify-end items-center z-20 pt-12 md:pt-20"
    >
      <div className="mt-[50px] md:mt-0 h-full max-w-[1240px] w-[75%] lg:w-[50%] lg:mr-20 px-2 py-5 z-20 mx-auto relative flex flex-col justify-center">
        <p className="text-xl tracking-widest uppercase text-[#eb4971] text-right drop-shadow-[0_2px_1.2px_rgba(255,255,255)]">
          Projects
        </p>
        <h2 className="py-2 text-right md:py-4 text-[#eb4971] drop-shadow-[0_2px_1.2px_rgba(255,255,255)]">
          What I&apos;ve Built
        </h2>
        <div className="max-h-[70vh] md:max-h-auto overflow-y-scroll mt-2 md:mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4 bg-[#ff738b] bg-opacity-70 p-4 shadow-xl rounded-xl">
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
        <GoTriangleDown className="md:hidden absolute bottom-0 left-[50%] translate-x-[-50%] text-3xl text-[#ffd54c]" />
      </div>
    </div>
  );
};

export default Projects;
