import { projects } from "../../data/projectsData";
import { Carousel } from "flowbite-react";
import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="h-screen">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl trakcing-widest uppercase text=[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="w-full h-[400px]">
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
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center h-96 w-full shadow-lg shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            Project 1
          </div>
          <div className="relative flex items-center justify-center h-96 w-full shadow-lg shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            Project 2
          </div>
          <div className="relative flex items-center justify-center h-96 w-full shadow-lg shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            Project 3
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
