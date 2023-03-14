import image from "../../../public/assets/intro-img.png";
import ComputerCanvas from "../canvas/Computers";
import { globalStyles } from "../styles";
import { styles } from "./MainStyles";
import { motion } from "framer-motion";
import React from "react";
import TypeIt from "typeit-react";

const Main = () => {
  return (
    <section id="Home" className={styles.mainContainer}>
      <div
        className={`${globalStyles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div
            className={`w-1 h-80 bg-gradient-to-b from-indigo-700 to-transparent sm:h-40`}
          />
        </div>
        <div>
          <h1 className={`${styles.mainText} flex flex-col items-start`}>
            Hi, I'm <br className="block md:hidden" />
            <span className="text-[#915eff]">Esther SH Choi</span>
            <div className="text-3xl text-[#915eff]">
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
          </h1>
          {/* <p className={`${styles.subText} mt-2 text-white-100`}>
            I develop user interfaces, database, and web applications.
          </p> */}
        </div>
      </div>
      <ComputerCanvas />
    </section>
  );
};

export default Main;
