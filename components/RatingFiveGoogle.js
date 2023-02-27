import Image from "next/image";
import styles from "../styles/components/RatingFiveGoogle.module.css";
import powered_by_google from "../public/components/ratingFiveGoogle/powered_by_google.png";

export default function RatingFiveGoogle() {
  return (
    <div className={styles.container_review}>
      <div className={styles.text_rating_star}>5.0</div>
      <div className={styles.container_stars}>
        <span className={styles.star}>
          &#9733; &#9733; &#9733; &#9733; &#9733;
        </span>
        <span>
          <Image
            src={powered_by_google}
            alt="powered_by_google"
            width="144"
            height="18"
          />
        </span>
      </div>
    </div>
  );
}
