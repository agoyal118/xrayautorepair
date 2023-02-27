import styles from "../styles/components/Footer.module.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { MdOutlineLocationOn, MdPhone, MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.hours_container}>
          <h5>Shop Hours</h5>
          <div>Mon-Fri: 9AM–7PM</div>
          <div>Saturday: Closed</div>
          <div>Sunday: Closed</div>
        </div>
        <div className={styles.info_container}>
          <h5>Contact Us</h5>
          <a
            href="https://www.google.com/maps/place/Xray+Auto+Repair/@41.8375279,-89.4752185,17z/data=!4m13!1m7!3m6!1s0x8809a95515db5397:0x91196ac4c6613a86!2s804+Franklin+Grove+Rd,+Dixon,+IL+61021!3b1!8m2!3d41.8374867!4d-89.4729254!3m4!1s0x8809ad5445dfc26f:0xf1f6a30d5bce46a4!8m2!3d41.8375329!4d-89.47303"
            target="_blank"
            rel="noreferrer"
          >
            <MdOutlineLocationOn
              style={{ verticalAlign: "sub", color: "red" }}
            />{" "}
            804 Franklin Grove Rd, <br /> &emsp;Dixon, IL 61021
          </a>
          <br />
          <br />
          <div>
            <MdMail style={{ verticalAlign: "sub", color: "red" }} />{" "}
            xrayautorepair@gmail.com
          </div>
          <br />
          <a href="tel:815-994-4349">
            <MdPhone style={{ verticalAlign: "sub", color: "red" }} /> (815)
            994-4349
          </a>
        </div>
        <div>
          <h5>Our Social Networks</h5>
          <a
            href="https://www.facebook.com/Xrayautorepair"
            target="_blank"
            rel="noreferrer"
            className={styles.direction_btn}
          >
            <FaFacebook style={{ verticalAlign: "sub", color: "blue" }} />{" "}
            Facebook
          </a>
          <br />
          <br />
          <a
            href="https://www.instagram.com/xrayautorepair/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram style={{ verticalAlign: "sub", color: "red" }} />{" "}
            Instagram
          </a>
        </div>
      </div>
      <div className={styles.footer}>© 2023 X-Ray Auto Repair</div>
    </div>
  );
};

export default Footer;
