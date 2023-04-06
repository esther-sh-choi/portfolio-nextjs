import { skills } from "../../data/skillsList";
import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div
      id="skills"
      className="md:h-screen flex justify-start md:items-center z-20"
    >
      {/* <div className="max-w-[1240px] m-10 sm:m-20 lg:m-30 xl:mx-auto flex flex-col justify-center h-full"> */}
      <div className="max-w-[1240px] w-[80%] lg:w-[50%] lg:ml-20 px-2 py-16 z-20 mx-auto">
        <p className="text-xl tracking-widest uppercase text-white">Skills</p>
        <h2 className="py-4">Here's what I can do</h2>
        <div className="p-4 rounded-xl grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-8 bg-[#ffae42] bg-opacity-50 shadow-xl">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-200 bg-white"
            >
              <div className="m-auto flex-1 flex-shrink-1 flex items-center">
                <Image
                  id={skill.id}
                  src={skill.src}
                  alt={skill.name}
                  width="50"
                  height="50"
                />
              </div>
              <h3 className="text-center text-sm">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
