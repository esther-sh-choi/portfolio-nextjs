import logo from "../../../public/assets/navLogo.svg";
import Menu from "../Menu";
import { routes } from "../routes";
import { styles } from "./NavbarStyles";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBackground, setNavBackground] = useState("transparent");
  const [linkColor, setLinkColor] = useState("#f43f5e");
  gsap.registerPlugin(ScrollToPlugin);

  const router = useRouter();

  // useEffect(() => {
  //   if (router.asPath === "/projects/food-pickup") {
  //     setNavBackground("transparent");
  //     setLinkColor("#ecf0f3");
  //   } else {
  //     setNavBackground("#ecf0f3");
  //     setLinkColor("#1f2937");
  //   }
  // }, [router]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  return (
    <div
      className={`${styles.navbarContainer} ${
        shadow ? "shadow-lg" : ""
      } bg-white md:bg-transparent md:shadow-none`}
    >
      <div className={`${styles.navbarContent} cursor-pointer`}>
        <Image
          src={logo}
          alt="/"
          width="50"
          height="50"
          onClick={() => {
            gsap.to(window, {
              scrollTo: `#home`,
              ease: "power1.inOut",
            });
          }}
        />
        <div>
          <ul
            className={styles.navbarLinkContainer}
            style={{ color: `${linkColor}` }}
          >
            {routes.map((route) => (
              <button
                key={route.id}
                className={styles.navbarLink}
                onClick={() => {
                  gsap.to(window, {
                    scrollTo: `#${route.id}`,
                    ease: "power1.inOut",
                  });
                }}
              >
                {route.name}
              </button>
            ))}
          </ul>
          <div className={styles.menuButton} onClick={handleMenuOpen}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
};

export default Navbar;
