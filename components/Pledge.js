import Image from "next/image";
import styles from "../styles/components/Pledge.module.css";
import auto_shop from "../public/components/pledge/xray_shop_sign.jpeg";
import xray_working from "../public/components/pledge/xray_working.jpeg";
import { IoCheckmarkCircle } from "react-icons/io5";

export default function Pledge() {
  return (
    <main className={styles.pledge}>
      <h3 className={styles.title_pledge}>Our Pledge</h3>
      <div className={styles.container_office}>
        <div className={styles.container_pictures}>
          <Image
            src={auto_shop}
            alt="Xray Auto Repair Shop Sign"
            width="512"
            height="450"
          />
          <Image
            src={xray_working}
            alt="Xray Auto Repair Shop Working in Shop"
            width="512"
            height="341"
          />
        </div>
        <div className={styles.promise_text}>
          <div>
            <IoCheckmarkCircle className={styles.icon} color="black" /> To
            recommend the services, repairs and maintenance necessary to keep
            the vehicle reliable, safe and efficient.
          </div>
          <br />
          <div>
            <IoCheckmarkCircle className={styles.icon} color="black" /> To sell
            only honest repairs and services to our customer.
          </div>
          <br />
          <div>
            <IoCheckmarkCircle className={styles.icon} color="black" /> To
            perform high quality repairs done right the first time.
          </div>
          <br />
          <div>
            <IoCheckmarkCircle className={styles.icon} color="black" /> To use
            high quality parts that meet or exceed those recommended by the
            vehicle&#39;s manufacturer.
          </div>
          <br />
          <div>
            <IoCheckmarkCircle className={styles.icon} color="black" /> To keep
            in good contact with the customer throughout the repair process.
          </div>
        </div>
      </div>
    </main>
  );
}
