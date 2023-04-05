import Model from "./Model";
// import Overlay from "./Overlay";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";

export default function Bedroom() {
  const overlay = useRef();
  const caption = useRef();
  const scroll = useRef(0);
  return (
    <>
      <Canvas shadows eventPrefix="client">
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Model scroll={scroll} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      {/* <Overlay ref={overlay} caption={caption} scroll={scroll} /> */}
    </>
  );
}
