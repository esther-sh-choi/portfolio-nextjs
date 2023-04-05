import { closeProjectModal } from "@component/features/projectSlice";
import { RootState } from "@component/store/store";
import React from "react";
import { FaDesktop, FaMobileAlt, FaXbox } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

const ProjectModal = (): JSX.Element | null => {
  const projectData = useSelector(
    (state: RootState) => state.project.projectData
  );
  const dispatch = useDispatch();

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    dispatch(closeProjectModal());
  };
  const handleCloseModal = () => {
    dispatch(closeProjectModal());
  };

  const icon = [
    { label: FaDesktop, alt: "Desktop Compatible" },
    { label: FaMobileAlt, alt: "Mobile Compatible" },
  ];

  return (
    <div
      id="projects"
      className="justify-center items-center flex overflow-hidden fixed inset-0  outline-none focus:outline-none z-30"
    >
      <div
        className="opacity-50 fixed inset-0 bg-black z-30"
        onClick={handleOverlayClick}
      ></div>
      <div className="relative w-auto my-6 mx-auto max-w-[80vw] lg:max-w-[1200px] z-40">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none z-60 p-5 overflow-hidden">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-xl lg:text-2xl font-semibold">
              {projectData.title}
            </h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-30 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={handleCloseModal}
            >
              <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="p-6 flex flex-col lg:flex-row">
            <div className="flex-1 mx-5 my-auto">
              <img src={projectData.image.gif} alt={projectData.image.alt} />
            </div>
            <div className="flex-1 max-h-[20vh] lg:max-h-[500px] pr-3 overflow-auto flex flex-col justify-center">
              <h5 className="mt-4">Summary</h5>
              <p className="text-slate-500 text-sm lg:text-md leading-relaxed">
                {projectData.description}
              </p>
              <h5 className="mt-4"></h5>
              <ul>
                {projectData.technology.map((tech, index) => (
                  <li
                    key={index}
                    className="text-slate-500 text-sm lg:text-md leading-relaxed list-disc ml-5"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="px-5 py-2">
            <h5 className="mt-4">Tech Stack</h5>
            <div className="flex flex-wrap w-[100%]">
              {projectData.skills.map((skill) => (
                <div
                  key={skill}
                  className="whitespace-nowrap my-[5px] mr-1 flex h-[25px] items-center rounded-[16px] bg-[#fff1d6] py-0 px-[12px] text-[13px] text-rose-500"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          {/*footer*/}
          <div className="flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b">
            <div>
              <button
                className="bg-gradient-to-r from-red-300 via-rose-400 to-red-300 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                // onClick={handleCloseModal}
              >
                View Code
              </button>
              <button
                className="bg-gradient-to-r from-red-300 via-rose-400 to-red-300 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                // onClick={handleCloseModal}
              >
                Visit Site
              </button>
            </div>
            <button
              className="bg-gradient-to-r from-red-300 via-rose-400 to-red-300 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
