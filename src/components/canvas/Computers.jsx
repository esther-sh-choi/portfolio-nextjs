import CanvasLoader from "../Loader";
import {
  OrbitControls,
  Preload,
  ScrollControls,
  useGLTF,
  useScroll,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import React, {
  Suspense,
  useEffect,
  useLayoutEffect,
  useState,
  useRef,
} from "react";

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;

const Computers = ({ isMobile }) => {
  // const computer = useGLTF("./assets/desktop_pc/scene.gltf");
  const { scene, nodes, materials } = useGLTF(
    "./assets/models/bedroomAll.gltf"
  );
  const ref = useRef();
  const tl = useRef();
  const bookshelfRef = useRef();
  const bedRef = useRef();
  const pcRef = useRef();

  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // Vertical animation
    // tl.current.to(
    //   ref.current.rotation,
    //   {
    //     duration: 1,
    //     // y: FLOOR_HEIGHT * (NB_FLOORS - 1),
    //     x: 0,
    //     y: Math.PI / 6,
    //     z: 0,
    //   },
    //   0
    // );

    gsap.to(controls.target, {
      x: 0.1,
      y: 1.3,
      z: 0.7,
      duration: 2,
      ease: "power3.inOut",
    });

    gsap.to(
      camera.position,
      {
        x: -4.6,
        y: 2.1,
        z: 11.8,
        duration: 2,
        ease: "power3.inOut",
        onComplete: enableButtons,
      },
      "-=2"
    );

    console.log(ref.current);

    // Office Rotation
    tl.current.to(
      bookshelfRef.current.rotation,
      { duration: 1, x: 0, y: Math.PI / 6, z: 0 },
      0
    );
    tl.current.to(
      bookshelfRef.current.rotation,
      { duration: 1, x: 0, y: -Math.PI / 6, z: 0 },
      1
    );

    // Office movement
    tl.current.to(
      bookshelfRef.current.position,
      {
        duration: 1,
        x: -1,
        z: 2,
      },
      0
    );
    tl.current.to(
      bookshelfRef.current.position,
      {
        duration: 1,
        x: 1,
        z: 2,
      },
      1
    );

    // LIBRARY FLOOR
    tl.current.from(
      bedRef.current.position,
      {
        duration: 0.5,
        x: -2,
      },
      0.5
    );
    tl.current.from(
      bedRef.current.rotation,
      {
        duration: 0.5,
        y: -Math.PI / 2,
      },
      0
    );

    // ATTIC
    tl.current.from(
      pcRef.current.position,
      {
        duration: 1.5,
        y: 2,
      },
      0
    );

    tl.current.from(
      pcRef.current.rotation,
      {
        duration: 0.5,
        y: Math.PI / 2,
      },
      1
    );

    tl.current.from(
      pcRef.current.position,
      {
        duration: 0.5,

        z: -2,
      },
      1.5
    );
  }, []);

  return (
    <group
      dispose={null}
      ref={ref}
      position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
      // rotation={[0, -Math.PI / 3, 0]}
    >
      <primitive object={scene} scale={isMobile ? 0.7 : 0.75} />
      <group position={[-1.97, 4.23, -2.2]}>
        <group ref={bookshelfRef}>
          <mesh geometry={nodes["Bookshelf"].geometry} />
        </group>
      </group>
      <group position={[-1.97, 4.23, -2.2]}>
        <group ref={bedRef}>
          <mesh geometry={nodes["Bed"].geometry} />
        </group>
      </group>
      <group position={[-1.97, 4.23, -2.2]}>
        <group ref={pcRef}>
          <mesh
            geometry={nodes["PC"].geometry}
            // position={[-1.97, 4.23, -2.2]}
          />
        </group>
      </group>
    </group>
    // <mesh>
    //   <hemisphereLight intensity={0.15} groundColor="black" />
    //   <spotLight
    //     position={[-20, 50, 10]}
    //     angle={0.12}
    //     penumbra={1}
    //     intensity={1}
    //     castShadow
    //     shadow-mapSize={1024}
    //   />
    //   <pointLight intensity={1} />
    //   <primitive
    //     object={scene}
    //     scale={isMobile ? 0.7 : 0.75}
    //     position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
    //     rotation={[-0.01, -0.2, -0.1]}
    //   />
    // </mesh>
  );
};

const ComputersCanvas = () => {
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
    <Canvas
      // frameloop="demand"
      shadows
      dpr={[1, 2]}
      //fov field of view (how wide)
      camera={{ position: [20, 3, -10], fov: 25 }}
      // rotate={[, 0, 0]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <ambientLight intensity={0.1} />
      <directionalLight position={[10, 3, -5]} color="#f3e7d3" />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          // Allow rotation only rotate sideways
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ScrollControls pages={5} damping={0.25}>
          <Computers isMobile={isMobile} />
        </ScrollControls>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
