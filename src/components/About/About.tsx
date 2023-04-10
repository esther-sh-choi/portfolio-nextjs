import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="h-[100vh] flex justify-center items-center z-20 pt-12 md:pt-20"
    >
      <div className="mt-[50px] md:mt-0 h-full max-w-[1240px] w-[75%] lg:w-[50%] px-2 py-16 z-20 relative flex flex-col justify-center">
        <p className="text-xl tracking-widest uppercase text-[#eb4971] drop-shadow-[0_2px_1.2px_rgba(255,255,255)]">
          About Me
        </p>
        <h2 className="py-2 md:py-4 text-[#eb4971] drop-shadow-[0_2px_1.2px_rgba(255,255,255)]">
          Welcome to my virtual room!
        </h2>
        <div className="md:max-h-auto overflow-y-scroll mt-2 shadow-xl rounded-xl max-h-[50vh] lg:max-h-[60vh] overflow-auto bg-white bg-opacity-80 p-10 m-auto">
          <p className="whitespace-pre-line text-sm md:text-md lg:text-lg">
            Hi, I&apos;m Esther Choi. I am a software developer and an Ontario
            certified teacher who previously worked for York Region District
            School Board. I first started coding, to teach young students the
            basics of Python. But little did I know that it would soon become a
            passion that would change my career trajectory.{"\n"}
            {"\n"}I remember coding during every free time I had, whether it was
            at home, in a coffee shop, or during lunch breaks. Coding became my
            hobby, and I loved every minute of it. I soon realized that I could
            make a career out of my newfound passion, and I decided to take the
            plunge into the world of software development. What I absolutely
            love about web development, is that there is always something new
            and exciting to learn. I love being able to solve problems and
            expand my field of knowledge.{"\n"}
            {"\n"}Aside from coding, I am also a cat lover. I have one adorable
            fur baby named HooChooh, and he always keeps me company while I
            work. I also love musical theatres and playing keyboard in the band!
            {"\n"}
            {"\n"}That being said, I&apos;ve worked in various team settings
            (e.g., projects, teacher, waitress, barista, stage performer) and I
            know, by experience, how important collaboration and communication
            is. And I can confidently say that I enjoy working in teams.{"\n"}
            {"\n"}Scroll further to learn more about me!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
