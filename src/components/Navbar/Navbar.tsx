import Menu from "../Menu";
import { routes } from "../routes";
import { styles } from "./NavbarStyles";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarContent}>
        <Image src="/assets/navLogo.svg" alt="/" width="70" height="70" />
        <div>
          <ul className="hidden md:flex">
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
