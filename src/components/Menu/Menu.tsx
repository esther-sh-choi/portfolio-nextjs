import { routes } from "../routes";
import { styles } from "./MenuStyles";
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
          <div className={styles.closeBtn} onClick={handleMenuClose}>
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.menuMain}>
          <ul className="uppercase">
            {routes.map((route) => (
              <Link href={route.path} key={route.id}>
                <li className={styles.menuLink}>{route.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className={styles.menuFooter}>
          <h4 className={styles.footerTitle}>Let's connect</h4>
          <div className={styles.connectIconContainer}>
            <div className={styles.connectIcon}>
              <FaLinkedinIn />
            </div>
            <div className={styles.connectIcon}>
              <FaGithub />
            </div>
            <div className={styles.connectIcon}>
              <AiOutlineMail />
            </div>
            <div className={styles.connectIcon}>
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
