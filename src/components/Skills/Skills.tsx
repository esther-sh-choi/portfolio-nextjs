import { skills } from "../../data/skillsList";
import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div
      id="skills"
      className="md:h-screen flex justify-start md:items-center z-20"
    >
      <div className="mt-[50px] md:mt-0 max-w-[1240px] w-[80%] lg:w-[50%] lg:ml-20 px-2 py-16 z-20 mx-auto">
        <p className="text-xl tracking-widest uppercase text-[#eb4971] drop-shadow-[0_2px_1.2px_rgba(255,255,255)]">
          Skills
        </p>
        <h2 className="py-2 md:py-4 text-[#eb4971] drop-shadow-[0_2px_1.2px_rgba(255,255,255)]">
          What I can do
        </h2>
        <div className="p-4 rounded-xl grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-8 bg-[#ffae42] bg-opacity-50 shadow-xl">
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
      </div>
    </div>
  );
};

export default Skills;
