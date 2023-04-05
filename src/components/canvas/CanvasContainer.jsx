import Bedroom from "./Bedroom1";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useState, useEffect } from "react";

const CanvasContainer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping={true}
        // maxPolarAngle={Math.PI / 2}
        // minPolarAngle={Math.PI}
      />
      <Bedroom isMobile={isMobile} />
      <Environment preset="lobby" />
    </Canvas>
  );
};

export default CanvasContainer;