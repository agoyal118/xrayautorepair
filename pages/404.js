import Link from "next/link";
import { useEffect } from "react";
import Router from "next/router";
import styles from "../styles/404.module.css";
import Head from "next/head";

const NotFound = () => {
  useEffect(() => {
    setTimeout(() => {
      Router.push("/");
    }, 10000);
  }, []);

  return (
    <div className={styles.not_found}>
      <Head>
        <title>X-ray Auto Repair</title>
        <meta
          name="X-ray Auto Repair"
          content="Body Shop Serving Dixon, Illinois"
        />
        <link rel="icon" href="/logo.webp" />
      </Head>
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <br />
      <br />
      <p>Go back to the</p>
      <Link href="/" className={styles.link_button}>
        Homepage
      </Link>
    </div>
  );
};

export default NotFound;
