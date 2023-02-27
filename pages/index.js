import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import landing_image from "../public/index/x_ray_front_page.jpeg";
import RatingFiveGoogle from "@/components/RatingFiveGoogle";
import FeaturedServices from "@/components/FeaturedServices";
import Mapbox from "@/components/Mapbox";
import Slider from "@/components/Slider";
import Pledge from "@/components/Pledge";

export default function Home() {
  return (
    <>
      <Head>
        <title>X-Ray Auto Repair</title>
        <meta
          name="description"
          content="Affordable Auto Repair Prices, Unbeatable Quality"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.webp" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container_landing}>
          <div className={styles.bg_image}>
            <Image
              src={landing_image}
              alt="Landing Page Image"
              placeholder="blur"
              quality={100}
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <br />
          <div className={styles.textbox_blur}>
            <h1 className={styles.bg_title}>
              Affordable Price
              <br />
              Unbeatable Quality
            </h1>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className={styles.textbox_blur}>
            <span className={styles.bg_rating}>
              <RatingFiveGoogle />
            </span>
          </div>
        </div>
        <FeaturedServices />
        <Slider />
        <Pledge />
        <Mapbox />
      </main>
    </>
  );
}
