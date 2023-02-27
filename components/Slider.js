import reviewData from "./data/reviewData.js";
import styles from "../styles/components/Slider.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 3,
        },
      }}
      spaceBetween={50}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {reviewData.map((obj) => {
        return (
          <SwiperSlide key={obj.name} className={styles.container}>
            <div className={styles.patient_info}>
              <Image
                src={obj.imageIcon}
                alt="review_image_1"
                width="80"
                height="80"
              />
              <div>
                {obj.name}
                <br />
                {obj.localGuide && "Local Guide"}
                <br />
                {Array.from({ length: obj.rating }, (list, index) => (
                  <span className={styles.star} key={index}>
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
            <br />
            {obj.comment}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Slider;
