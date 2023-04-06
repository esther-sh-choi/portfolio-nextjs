import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useLayoutEffect, useEffect } from "react";
import { useSelector } from "react-redux";

const Bedroom = ({ isMobile }) => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  const { scene: bedroomScene } = useGLTF("/assets/models/bedroom.glb");
  const { camera } = useThree();
  const isOpen = useSelector((state) => state.project.isOpen);

  let tl = gsap.timeline();

  ScrollTrigger.config({
    limitCallbacks: true,
  });
  console.log(camera);

  useLayoutEffect(() => {
    !isOpen
      ? tl.to(camera.position, {
          x: 0.12983012272721967,
          y: 0.4459620018409872,
          z: 5.813218278397693,
          scale: isMobile ? 0.7 : 0.8,
          scrollTrigger: {
            trigger: "#home",
            // pin: "#home",
            pinSpacing: false,
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
            // snap: {
            //   snapTo: "#home", // snap to the closest label in the timeline
            //   duration: { min: 0.2, max: 0.5 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
            //   ease: "power1", // the ease of the snap animation ("power3" by default)
            // },
          },
        })
      : tl.pause();

    // Bed - About me
    !isOpen
      ? tl.to(camera.position, {
          x: -0.011110440161001383,
          y: 0.002326567011673244,
          z: 0.01601712490957726,
          scrollTrigger: {
            trigger: "#about",
            start: "top bottom",
            end: "top top",
            scrub: true,
            // pin: "#about",
            pinSpacing: false,
            immediateRender: false,
            snap: {
              snapTo: "#about",
              duration: { min: 0.2, max: 0.5 },
              delay: 0.2,
              ease: "power1",
            },
          },
        })
      : tl.pause();

    // Bookshelf - Skills
    !isOpen
      ? tl.to(camera.position, {
          x: 0.0006634052844741087,
          y: 0.00002421679759594989,
          z: 0.0005459788201534593,
          scrollTrigger: {
            trigger: "#skills",
            start: "top bottom",
            end: "top top",
            // pin: "#skills",
            pinSpacing: false,
            scrub: true,
            immediateRender: false,
            snap: {
              snapTo: "#skills",
              duration: { min: 0.2, max: 0.5 },
              delay: 0.2,
              ease: "power1",
            },
          },
        })
      : tl.pause();

    // Computer - Projects
    !isOpen
      ? tl.to(camera.position, {
          x: -0.02947425441128117,
          y: 0.0019282798237053556,
          z: 0.0015648388487006014,
          scrollTrigger: {
            trigger: "#projects",
            start: "top bottom",
            end: "top top",
            // pin: "#projects",
            pinSpacing: false,
            scrub: true,
            immediateRender: false,
            snap: {
              snapTo: "#projects",
              duration: { min: 0.2, max: 0.5 },
              delay: 0.2,
              ease: "power1",
            },
          },
        })
      : tl.pause();

    // Coffee - contact me
    !isOpen
      ? tl.to(camera.position, {
          x: -0.036012678122319,
          y: isMobile ? 0.11 : 0.06005036637699721,
          z: isMobile ? 0.07 : 0.06399400225061104,
          scale: isMobile ? 2 : 0.8,
          scrollTrigger: {
            trigger: "#contact",
            start: "top bottom",
            end: "top 20%",
            // pin: "#contact",
            pinSpacing: false,
            scrub: true,
            immediateRender: false,
            snap: {
              snapTo: "#contact",
              duration: { min: 0.2, max: 0.5 },
              delay: 0.2,
              ease: "power1",
            },
          },
        })
      : tl.pause();
  });
  return (
    <>
      <directionalLight castShadow position={[-7, 0, 0.6]} color="#fffceb" />
      <primitive
        object={bedroomScene}
        position={isMobile ? [1, -4, -2] : [1, -2, -2]}
        rotation={[0, -Math.PI * 0.9, 0]}
      />
    </>
  );
};

export default Bedroom;
