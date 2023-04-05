import about from "../../../public/assets/about-img.jpg";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="h-screen z-20 flex justify-center">
      <div className="bg-white bg-opacity-70 p-10 rounded-xl m-auto">
        <p className="uppercase text-xl tracking-widest text-[#70739e]">
          About
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nemo,
          rem tempora ea deleniti tempore inventore id numquam est nesciunt at
          deserunt? Rem eaque eveniet, iure velit veritatis culpa quis.
        </p>
      </div>
    </div>
  );
};

export default About;
