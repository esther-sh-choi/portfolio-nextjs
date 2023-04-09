import { globalStyles } from "../styles";
import { styles } from "./MainStyles";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn, FaFileAlt } from "react-icons/fa";
import TypeIt from "typeit-react";

const Main = () => {
  return (
    <div
      id="home"
      className="h-[100vh] z-20 flex flex-col justify-between pt-12 md:pt-20"
    >
      <div
        className={`pl-5 pt-10 inset-0 flex flex-row items-start gap-5 z-20`}
      >
        <div className="flex flex-col justify-center items-center md:mt-5">
          <div className="w-5 h-5 rounded-full bg-[#f43f5e]" />
          <div
            className={`w-1 h-36 md:h-80 bg-gradient-to-b from-red-400 to-transparent sm:h-40`}
          />
        </div>
        <div className="flex flex-col w-full">
          <h1 className={`${styles.mainText} flex flex-col items-start`}>
            Hi, I&apos;m <br className="block md:hidden" />
            <span className="text-[#f43f5e]">Esther SH Choi</span>
            <div className="text-xl md:text-3xl text-[#f43f5e] h-16">
              <TypeIt
                cursorchar={<div>*</div>}
                options={{ loop: true }}
                getBeforeInit={(instance) => {
                  instance
                    .type("I am a full-stack developer.")
                    .pause(1200)
                    .delete(28)
                    .pause(500)
                    .type("I make imagination come to life!")
                    .pause(1200);

                  return instance;
                }}
              />
            </div>
            <div className="hidden lg:flex mt-10 ">
              <Link
                className="z-20 w-[150px] bg-gradient-to-r from-rose-300 to-rose-400 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow-md hover:shadow-lg outline-none text-center"
                type="button"
                href="https://flowcv.com/resume/0lnv2aak4d"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </Link>
              <Link
                className="z-20 w-[150px] mx-3 bg-rose-400 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow-md hover:shadow-lg outline-none text-center"
                type="button"
                href="https://www.linkedin.com/in/esther--choi/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </Link>
              <Link
                className="z-20 w-[150px] bg-gradient-to-l from-rose-300 to-rose-400 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow-md hover:shadow-lg outline-none text-center"
                type="button"
                href="https://github.com/esther-sh-choi"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </Link>
            </div>
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-around mb-32 lg:hidden text-white">
        <Link
          className="rounded-full shadow-md bg-rose-400 p-3 cursor-pointer hover:scale-110 ease-in duration-200"
          type="button"
          href="https://www.linkedin.com/in/esther--choi/"
          target="_blank"
          rel="noreferrer"
          aria-label="linkedin"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          className="rounded-full shadow-md bg-rose-400 mx-5 p-3 cursor-pointer hover:scale-110 ease-in duration-200"
          type="button"
          href="https://github.com/esther-sh-choi"
          target="_blank"
          rel="noreferrer"
          aria-label="github"
        >
          <FaGithub />
        </Link>
        <Link
          className="rounded-full shadow-md bg-rose-400 p-3 cursor-pointer hover:scale-110 ease-in duration-200"
          type="button"
          href="https://flowcv.com/resume/0lnv2aak4d"
          target="_blank"
          rel="noreferrer"
          aria-label="resume"
        >
          <FaFileAlt />
        </Link>
      </div>
    </div>
  );
};

export default Main;
