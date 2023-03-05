import logo from "../../../public/assets/navLogo.svg";
import Menu from "../Menu";
import { routes } from "../routes";
import { styles } from "./NavbarStyles";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shadow, setShadow] = useState(false);

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
    <div className={`${styles.navbarContainer} ${shadow ? "shadow-lg" : ""}`}>
      <div className={styles.navbarContent}>
        <Image src={logo} alt="/" width="70" height="70" />
        <div>
          <ul className={styles.navbarLinkContainer}>
            {routes.map((route) => (
              <Link href={route.path} key={route.id}>
                <li className={styles.navbarLink}>{route.name}</li>
              </Link>
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
