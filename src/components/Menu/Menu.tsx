import { routes } from "../routes";
import { styles } from "./MenuStyles";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

type MenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Menu = ({ isMenuOpen, setIsMenuOpen }: MenuProps): JSX.Element => {
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={isMenuOpen ? styles.menuContainer : ""}>
      <div
        className={isMenuOpen ? styles.backdrop : ""}
        onClick={handleMenuClose}
      ></div>
      <div className={isMenuOpen ? styles.navbarMenu : styles.navbarMenuClosed}>
        <div className={styles.menuHeader}>
          <Image src="/assets/navLogo.svg" width="87" height="35" alt="/" />
          <button
            className="p-1 ml-auto bg-transparent border-0 text-black opacity-30 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            onClick={handleMenuClose}
          >
            <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
              ×
            </span>
          </button>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.menuMain}>
          <div className="flex flex-col justify-center items-center ">
            {routes.map((route) => (
              <button
                className="cursor-pointer my-3 uppercase"
                onClick={() => {
                  gsap.to(window, {
                    scrollTo: `#${route.id}`,
                    ease: "power1.inOut",
                  });
                }}
                key={route.id}
              >
                {route.name}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.menuFooter}>
          <h4 className={styles.footerTitle}>Let&apos;s connect</h4>
          <div className={styles.connectIconContainer}>
            <Link
              className={styles.connectIcon}
              type="button"
              href="https://www.linkedin.com/in/esther--choi/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              className={styles.connectIcon}
              type="button"
              href="https://github.com/esther-sh-choi"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </Link>
            <Link
              className={styles.connectIcon}
              type="button"
              href="mailto:estherchoi.sh@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineMail />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
