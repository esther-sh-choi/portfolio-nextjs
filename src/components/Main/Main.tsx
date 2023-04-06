import { globalStyles } from "../styles";
import { styles } from "./MainStyles";
import React from "react";
import TypeIt from "typeit-react";

const Main = () => {
  return (
    <div id="Home" className="h-screen z-20 relative">
      <div
        className={`${globalStyles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5 z-20`}
      >
        <div className="flex flex-col justify-center items-center md:mt-5">
          <div className="w-5 h-5 rounded-full bg-[#f43f5e]" />
          <div
            className={`w-1 h-36 md:h-80 bg-gradient-to-b from-red-400 to-transparent sm:h-40`}
          />
        </div>
        <div>
          <h1 className={`${styles.mainText} flex flex-col items-start`}>
            Hi, I&apos;m <br className="block md:hidden" />
            <span className="text-[#f43f5e]">Esther SH Choi</span>
            <div className="text-xl md:text-3xl text-[#f43f5e]">
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
        </div>
      </div>
    </div>
  );
};

export default Main;
