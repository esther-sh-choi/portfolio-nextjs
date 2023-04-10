import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useState, useLayoutEffect } from "react";
import { useSelector } from "react-redux";

const Bedroom = ({ isSmallScreen }) => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  const { scene: bedroomScene } = useGLTF("/assets/models/bedroom.glb");
  const { camera } = useThree();
  const isOpen = useSelector((state) => state.project.isOpen);

  let tl = gsap.timeline();

  ScrollTrigger.config({
    limitCallbacks: true,
    ignoreMobileResize: true,
  });

  ScrollTrigger.normalizeScroll({
    allowNestedScroll: true,
    lockAxis: true,
  });

  useLayoutEffect(() => {
    !isOpen
      ? tl.to(camera.position, {
          x: 0.12983012272721967,
          y: 1.2459620018409872,
          z: 5.113218278397693,
          // scale: 0.8,
          scrollTrigger: {
            trigger: "#home",
            pinSpacing: false,
            start: isSmallScreen ? "top center" : "top 99%",
            end: isSmallScreen ? "top top" : "top 1%",
            scrub: true,
            immediateRender: false,
            snap: !isSmallScreen && {
              snapTo: "#home", // snap to the closest label in the timeline
              duration: { min: 0.2, max: 0.5 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
              delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
              ease: "power1", // the ease of the snap animation ("power3" by default)
            },
          },
        })
      : tl.pause();

    // Bed - about me
    !isOpen
      ? tl.to(camera.position, {
          x: -0.51110440161001383,
          y: 0.1326567011673244,
          z: 1.01601712490957726,
          scrollTrigger: {
            trigger: "#about",
            start: isSmallScreen ? "top center" : "top 99%",
            end: isSmallScreen ? "top top" : "top 1%",
            scrub: true,
            pinSpacing: false,
            immediateRender: false,
            snap: !isSmallScreen && {
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
          x: 0.00056634052844741087,
          y: 0.0001421679759594989,
          z: 0.0004459788201534593,
          scrollTrigger: {
            trigger: "#skills",
            start: isSmallScreen ? "top center" : "top 99%",
            end: isSmallScreen ? "top top" : "top 1%",
            pinSpacing: false,
            scrub: true,
            immediateRender: false,
            snap: !isSmallScreen && {
              snapTo: "#skills",
              duration: { min: 0.2, max: 1 },
              delay: 0.2,
              ease: "power1",
            },
          },
        })
      : tl.pause();

    // Computer - Projects
    !isOpen
      ? tl.to(camera.position, {
          x: isSmallScreen ? -0.3947425441128117 : -0.01947425441128117,
          y: isSmallScreen ? -0.0482798237053556 : 0.009282798237053556,
          z: isSmallScreen ? 0.0482798237053556 : -0.009282798237053556,
          scrollTrigger: {
            trigger: "#projects",
            start: isSmallScreen ? "top center" : "top 99%",
            end: isSmallScreen ? "top top" : "top 1%",
            pinSpacing: false,
            scrub: true,
            immediateRender: false,
            snap: !isSmallScreen && {
              snapTo: "#projects",
              duration: { min: 0.2, max: 1 },
              delay: 0.2,
              ease: "power1",
            },
          },
        })
      : tl.pause();

    // Coffee - contact me
    !isOpen
      ? tl.to(camera.position, {
          x: isSmallScreen ? 0.12983012272721967 : -0.026012678122319,
          y: isSmallScreen ? 1.2459620018409872 : 0.06005036637699721,
          z: isSmallScreen ? 5.113218278397693 : 0.04399400225061104,
          scrollTrigger: {
            trigger: "#contact",
            start: isSmallScreen ? "top center" : "top 99%",
            end: isSmallScreen ? "top top" : "top 1%",
            pinSpacing: false,
            scrub: true,
            immediateRender: false,
            fastScrollEnd: true,
            snap: !isSmallScreen && {
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
        position={!isSmallScreen ? [1, -4, -2] : [1, -2, -2]}
        rotation={[0, -Math.PI * 0.9, 0]}
      />
    </>
  );
};

export default Bedroom;
