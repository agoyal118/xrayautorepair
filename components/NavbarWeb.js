import Image from "next/image";
import styles from "../styles/components/NavbarWeb.module.css";
import logo from "../public/logo.webp";
import Link from "next/link";

const NavbarWeb = () => {
  return (
    <nav>
      <div className={styles.Logobar}>
        <div>
          <Link href="/services">Services</Link>
        </div>
        <div>
          <Link href="/gallery">Gallery</Link>
        </div>
        <div>
          <Link href="/">
            <Image src={logo} alt="Logo" width={90} height={90} />
          </Link>
        </div>
        <div>
          <Link href="/about">About</Link>
        </div>
        <div>
          <Link href="/appointment" className={styles.book}>
            Request
            <br />
            Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarWeb;
