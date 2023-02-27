import Image from "next/legacy/image";
import styles from "../styles/components/FeaturedServices.module.css";
import { useState } from "react";
import engine from "../public/components/featuredServices/engine.png";
import oil from "../public/components/featuredServices/oil.png";
import wheels from "../public/components/featuredServices/wheels.png";
import tires from "../public/components/featuredServices/tires.png";

const FeaturedServices = () => {
  const [activeService, setActiveService] = useState("alignment");

  return (
    <div>
      <h3 className={styles.title_featured_services}>Featured Services</h3>
      <div className={styles.container_services}>
        <div
          className={!(activeService === "alignment") && styles.container_image}
          onClick={() => setActiveService("alignment")}
          onMouseOver={() => setActiveService("alignment")}
        >
          <Image src={wheels} alt="Wheel Alignment Icon" layout="responsive" />
          <h4 className={styles.subtitle_service}>Wheel Alignment</h4>
        </div>
        <div
          className={!(activeService === "engine") && styles.container_image}
          onClick={() => setActiveService("engine")}
          onMouseOver={() => setActiveService("engine")}
        >
          <Image src={engine} alt="Car Engine Icon" layout="responsive" />
          <h4 className={styles.subtitle_service}>Engine</h4>
        </div>
        <div
          className={!(activeService === "tires") && styles.container_image}
          onClick={() => setActiveService("tires")}
          onMouseOver={() => setActiveService("tires")}
        >
          <Image src={tires} alt="Car Tires Icon" layout="responsive" />
          <h4 className={styles.subtitle_service}>Tires</h4>
        </div>
        <div
          className={!(activeService === "oil") && styles.container_image}
          onClick={() => setActiveService("oil")}
          onMouseOver={() => setActiveService("oil")}
        >
          <Image src={oil} alt="Car Oil Change Icon" layout="responsive" />
          <h4 className={styles.subtitle_service}>Oil and Fluids</h4>
        </div>
      </div>
      <div>
        {activeService === "alignment" && (
          <div className={styles.text_service}>
            <p>
              Regular wheel alignments helps improve handling, ensures even tire
              wear, and extends the lifespan of tires.
            </p>
            <p>
              Call us or Request an Appointment Online to let our experts align
              your wheels and avoid decreased fuel efficiency and increased tire
              wear.
            </p>
          </div>
        )}
        {activeService === "engine" && (
          <div className={styles.text_service}>
            <p>
              A properly functioning engine improves performance, fuel
              efficiency, and overall reliability of the vehicle. A poorly
              functioning engine increases emissions and potentially costly
              repairs.
            </p>
            <p>
              Call us or Request an Appointment Online if you have any questions
              regarding your engine.
            </p>
          </div>
        )}
        {activeService === "tires" && (
          <div className={styles.text_service}>
            <p>
              Having good tires helps improve safety, handling, and fuel
              efficiency. Driving on worn-out tires results in decreased
              traction, poor handling, and potentially dangerous driving
              conditions.
            </p>
            <p>
              Call us or Request an Appointment Online to let our experts guide
              you based on your needs--whether that's to have tires that give
              the best bang for your buck or top of the line tires.
            </p>
          </div>
        )}
        {activeService === "oil" && (
          <div className={styles.text_service}>
            <p>
              A regular oil change helps maintain engine performance, improves
              fuel efficiency, and extends the lifespan of the engine. An oil
              change is recommended every 3 months or 3,000 miles.
            </p>
            <p>
              Call us or Request an Appointment Online to let our experts change
              your oil and re-up all your fluids to avoid potentially costly
              engine repairs in the future.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedServices;
