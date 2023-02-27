import Link from "next/link";
import Image from "next/image";
import styles from "../styles/components/Banner.module.css";
import { MdOutlineLocationOn, MdPhone } from "react-icons/md";

const Banner = () => {
  return (
    <main>
      <div className={styles.background}>
        <span className={styles.location}>
          <a
            href="https://www.google.com/maps/place/Xray+Auto+Repair/@41.8375279,-89.4752185,17z/data=!4m13!1m7!3m6!1s0x8809a95515db5397:0x91196ac4c6613a86!2s804+Franklin+Grove+Rd,+Dixon,+IL+61021!3b1!8m2!3d41.8374867!4d-89.4729254!3m4!1s0x8809ad5445dfc26f:0xf1f6a30d5bce46a4!8m2!3d41.8375329!4d-89.47303"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <MdOutlineLocationOn
                style={{ verticalAlign: "sub", color: "red" }}
              />{" "}
              <u>804 Franklin Grove Rd, Dixon, IL 61021</u>
            </span>
          </a>
        </span>
        <span className={styles.contact}>
          <a href="tel:815-994-4349">
            <MdPhone style={{ verticalAlign: "sub", color: "red" }} /> (815)
            994-4349
          </a>
        </span>
      </div>
    </main>
  );
};

export default Banner;
