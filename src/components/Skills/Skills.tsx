import { skills } from "../../data/skillsList";
import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="h-screen flex justify-start items-center z-20">
      {/* <div className="max-w-[1240px] m-10 sm:m-20 lg:m-30 xl:mx-auto flex flex-col justify-center h-full"> */}
      <div className="max-w-[1240px] w-full lg:w-[50%] ml-20 px-2 py-16 z-20">
        <p className="text-xl tracking-widest uppercase text-white">Skills</p>
        <h2 className="py-4">Here's what I can do</h2>
        <div className="p-4 rounded-xl grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 bg-[#ffae42] bg-opacity-70 shadow-xl">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-200 bg-white"
            >
              <div className="grid grid=cols-2 gap-4 justify-center items-center ">
                <div className="m-auto">
                  <Image
                    id={skill.id}
                    src={skill.src}
                    alt={skill.name}
                    width="50"
                    height="50"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
