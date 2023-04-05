import { projects } from "../../data/projectsData";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="h-screen flex justify-end items-center">
      <div className="max-w-[1240px] w-full lg:w-[40%] mr-10 px-2 py-16">
        <p className="text-xl trakcing-widest uppercase text=[#5651e5] text-right">
          Projects
        </p>
        <h2 className="py-4 text-right">What I've Built</h2>
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
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4 bg-[#ffae42] p-4 shadow-xl rounded-xl">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col items-center justify-center lg:h-72 w-full shadow-lg rounded-xl group bg-white hover:bg-gradient-to-r from-[#ff7fa1] to-[#ff9db7] hover:cursor-pointer overflow-hidden"
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
  );
};

export default Projects;
