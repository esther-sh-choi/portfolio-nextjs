import about from "../../../public/assets/about-img.jpg";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    // <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
    <div id="about" className="h-screen">
      About
      {/* <div className=" w-full m-20 md:grid grid-cols-5 gap-8 lg:m-40">
        <div className="col-span-3 flex flex-col justify-center">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            // I am not your normal developer
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            nemo, rem tempora ea deleniti tempore inventore id numquam est
            nesciunt at deserunt? Rem eaque eveniet, iure velit veritatis culpa
            quis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            aperiam repellat aspernatur, consectetur fugit fugiat culpa nesciunt
            dolor architecto totam similique dignissimos enim, dolorem voluptate
            quis quaerat? Tempora, facilis consequatur.
          </p>
          <p>Check out some of my latest projects</p>
        </div>
        <div className="w-full h-[50vmin] mt-5 p-4 shadow-lg shadow-gray-400 rounded-xl flex items-center justify-center overflow-hidden md:h-[300px] col-span-2">
          <Image
            className="rounded-xl w-full h-full object-cover"
            src={about.src}
            alt="programmer"
            width="100"
            height="100"
          ></Image>
        </div>
      </div> */}
    </div>
  );
};

export default About;
