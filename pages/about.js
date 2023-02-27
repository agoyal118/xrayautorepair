import styles from "../styles/About.module.css";
import Image from "next/legacy/image";
import xavier_raymond from "../public/about/xavier_raymond.jpeg";

const About = () => {
  return (
    <main className={styles.main_about}>
      <h1 className={styles.title_about}>About Us</h1>
      <div className={styles.container_about}>
        <div className={styles.container_image}>
          <Image
            src={xavier_raymond}
            alt="Xavier and Raymond"
            layout="responsive"
          />
        </div>
        <div className={styles.text_about}>
          <p>
            Xavier and Raymond started X-Ray Auto Repair as a side project to
            help family and friends who could not afford expensive repairs at
            big box shops. Starting as a small 2 car garage with evening hours,
            X-Ray has grown to a 4 bay, full service operation open 9am-7pm five
            days a week.
          </p>
          <p>
            From quick oil changes to complete engine rebuilds, X-Ray takes
            pride in their high quality work at below market rates. Stop by to
            learn why customers feel like family.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
