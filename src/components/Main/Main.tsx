import image from "../../../public/assets/intro-img.png";
import React from "react";
import TypeIt from "typeit-react";

const Main = () => {
  const styles = {
    mainContainer: "w-full h-screen text-center pt-20",
  };
  return (
    <div className={styles.mainContainer}>
      <div className="hidden sm:flex justify-center items-center w-full h-[100%]">
        <img
          className="w-[600px] max-h-[100vmin] md:w-[700px] lg:w-[800px] xl:w-[900px] ease-out duration-100 z-0"
          src={image.src}
          alt="laptop-illustration"
        />
      </div>

      <div className="fixed top-0 w-full h-[100%] p-5">
        <div className="flex flex-col justify-center items-center h-[100%]">
          <div className="flex flex-col justify-center items-center h-[100px]">
            <h2>Hi, </h2>
            <h2>I'm Esther Choi.</h2>
          </div>
          <div className="text-2xl">
            <TypeIt
              cursorchar={<div className="text-2xl">|</div>}
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
          <button className="mt-10 px-5 py-2">Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
