import Image from "next/image";
import styles from "../styles/components/NavbarMobile.module.css";
import logo from "../public/logo.webp";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import CheckOutsideClick from "./utils/CheckOutsideClick.js";

const NavbarMobile = () => {
  const [sidebar, setSidebar] = useState(false);
  const closeSidebar = () => setSidebar(false);
  const openSidebar = () => setSidebar(true);

  return (
    <nav className={styles.navbar}>
      <div className={styles.top_bar}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={logo} alt="Logo" width={90} height={90} />
          </Link>
        </div>
        <div className={styles.hamburger_bar}>
          <FaBars size={35} onClick={openSidebar} />
        </div>
      </div>
      <div className={styles.navMenu}>
        <CheckOutsideClick onClickOutside={closeSidebar}>
          <div
            className={
              sidebar
                ? `${styles.navMenuActive} ${styles.navMenuInactive}`
                : styles.navMenuInactive
            }
          >
            <AiOutlineClose
              size={35}
              onClick={closeSidebar}
              className={styles.nav_link}
            />
            <Link href="/" className={styles.nav_link} onClick={closeSidebar}>
              Home
            </Link>
            <Link
              href="/services"
              className={styles.nav_link}
              onClick={closeSidebar}
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className={styles.nav_link}
              onClick={closeSidebar}
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className={styles.nav_link}
              onClick={closeSidebar}
            >
              About
            </Link>
            <Link
              href="/appointment"
              className={styles.nav_link}
              onClick={closeSidebar}
            >
              Request Appointment
            </Link>
            <a
              href="https://www.google.com/maps/place/Xray+Auto+Repair/@41.8375279,-89.4752185,17z/data=!4m13!1m7!3m6!1s0x8809a95515db5397:0x91196ac4c6613a86!2s804+Franklin+Grove+Rd,+Dixon,+IL+61021!3b1!8m2!3d41.8374867!4d-89.4729254!3m4!1s0x8809ad5445dfc26f:0xf1f6a30d5bce46a4!8m2!3d41.8375329!4d-89.47303"
              target="_blank"
              rel="noreferrer"
              className={styles.nav_link}
            >
              Get Directions
            </a>
          </div>
        </CheckOutsideClick>
      </div>
      <div className={styles.bottom_bar}>
        <Link href="/appointment" className={styles.book_btn}>
          Request Appt
        </Link>
        <a className={styles.emergency_btn} href="tel:708-403-4388">
          Call
        </a>
      </div>
    </nav>
  );
};

export default NavbarMobile;
