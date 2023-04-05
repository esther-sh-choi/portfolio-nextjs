import React, { useState, useEffect } from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

const ScrollDown = () => {
  const [visible, setVisible] = useState(true);
  const [message, setMessage] = useState("Scroll Down");
  useEffect(() => {
    const handleScrollIndicator = () => {
      if (
        document.body.offsetHeight > window.innerHeight &&
        window.innerHeight + window.scrollY < document.body.offsetHeight
      ) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScrollIndicator);
    return () => {
      window.removeEventListener("scroll", handleScrollIndicator);
    };
  }, []);

  return (
    visible && (
      <div className="fixed inset-x-0 bottom-10 flex flex-col items-center z-10">
        <p className="text-[#FFAE42] text-lg">{message}</p>
        <FaAngleDoubleDown className="text-[#FFAE42] animate-bounce mt-1" />
      </div>
    )
  );
};

export default ScrollDown;
