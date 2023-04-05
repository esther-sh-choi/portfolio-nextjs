import { closeProjectModal } from "@component/features/projectSlice";
import { RootState } from "@component/store/store";
import React from "react";
import { FaDesktop, FaMobileAlt } from "react-icons/fa";
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
    <>
      <div
        className="opacity-50 fixed inset-0 z-50 bg-black"
        onClick={handleOverlayClick}
      ></div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0  outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none z-60">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Modal Title</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={handleCloseModal}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                I always felt like I could do anything. That’s the main thing
                people are controlled by! Thoughts- their perception of
                themselves! They're slowed down by their perception of
                themselves. If you're taught you can’t do anything, you won’t do
                anything. I was taught I could do everything.
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="bg-emerald-500 text-red-500 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <style>{`body {
        height: 100vh;
overflow-y: hidden;
  padding-right: 15px; /* Avoid width reflow */
`}</style>
    </>
  );
};

export default ProjectModal;
