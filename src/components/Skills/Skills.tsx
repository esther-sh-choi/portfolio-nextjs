import { skills } from "../../data/skillsList";
import Image from "next/image";
import React from "react";
import { GoTriangleDown } from "react-icons/go";

const Skills = () => {
  return (
    <div
      id="skills"
      className="md:h-screen flex justify-start md:items-center z-20"
    >
      <div className="mt-[50px] md:mt-0 h-full max-w-[1240px] w-[80%] lg:w-[50%] lg:ml-20 px-2 py-16 z-20 mx-auto relative">
        <p className="text-xl tracking-widest uppercase text-[#eb4971] drop-shadow-[0_2px_1.2px_rgba(255,255,255)]">
          Skills
        </p>
        <h2 className="py-2 md:py-4 text-[#eb4971] drop-shadow-[0_2px_1.2px_rgba(255,255,255)]">
          What I can do
        </h2>
        <div className="max-h-[70vh] md:max-h-auto overflow-y-auto mt-2 p-4 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 bg-[#ffd54c] bg-opacity-60 shadow-xl rounded-xl">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex flex-col items-center p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-200 bg-white"
            >
              <div className="m-auto flex items-center">
                <Image
                  id={skill.id}
                  src={skill.src}
                  alt={skill.name}
                  width="40"
                  height="40"
                />
              </div>
              <h3 className="text-center text-xs leading-none mt-1">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
        <GoTriangleDown className="md:hidden absolute bottom-10 left-[50%] translate-x-[-50%] text-3xl text-[#eb4971]" />
      </div>
    </div>
  );
};

export default Skills;
