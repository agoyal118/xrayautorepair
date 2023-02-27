import Image from "next/legacy/image";
import styles from "../styles/Services.module.css";
import {
  alignment_pic,
  battery_pic,
  brakes_pic,
  diagnostic_pic,
  engine_pic,
  exhaust_pic,
  oil_pic,
  suspension_pic,
  tires_pic,
} from "../public";

const Services = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title_services}>Our Expert Services</h1>
      <div className={styles.container_services}>
        <div className={styles.container_individual_services}>
          <div className={styles.container_image_services}>
            <Image src={engine_pic} alt="engine" layout="responsive" />
          </div>
          <div className={styles.container_text_services}>
            <h3 className={styles.subtitle_services}>Engines</h3>
            <div className={styles.text_services}>
              {`Is your car's engine running smoothly? Or are you hearing strange
              noises and experiencing poor performance? Don't wait until it's
              too late! Bring your car to X-Ray Auto Repair for a comprehensive
              engine service. Our expert technicians will diagnose any issues
              and provide the necessary repairs to keep your engine running at
              its best. Trust us to keep your car on the road and running
              smoothly.`}
            </div>
          </div>
        </div>
        <div className={styles.container_individual_services}>
          <div className={styles.container_image_services}>
            <Image
              src={diagnostic_pic}
              alt="diagnostic"
              layout="responsive"
              className={styles.image}
            />
          </div>
          <div className={styles.container_text_services}>
            <h3 className={styles.subtitle_services}>Diagnostics</h3>
            <div className={styles.text_services}>
              {`Is your car making strange noises or not running as smoothly as it used to? Our expert technicians use the latest diagnostic equipment to identify and diagnose any issues with your vehicle. We pride ourselves on our accuracy and attention to detail, ensuring that we pinpoint the root of the problem and provide you with an effective solution. Our comprehensive diagnostic service covers everything from engine and transmission problems to electrical issues and more. Let us take the guesswork out of your car troubles and get you back on the road in no time.`}
            </div>
          </div>
        </div>
        <div className={styles.container_individual_services}>
          <div className={styles.container_image_services}>
            <Image
              src={brakes_pic}
              alt="brakes"
              layout="responsive"
              className={styles.image}
            />
          </div>
          <div className={styles.container_text_services}>
            <h3 className={styles.subtitle_services}>Brakes</h3>
            <div className={styles.text_services}>
              {`We understand the importance of safe and reliable brakes. Our team of experienced technicians is trained to diagnose and repair any issues with your brakes, from worn brake pads to leaking brake lines. Our brake services include brake pad replacement, brake rotor resurfacing or replacement, brake fluid exchange, and brake line repair. We use high-quality brake parts and products to ensure the best performance and longevity for your brakes. If you're experiencing any brake-related issues, such as squeaking or grinding noises, vibrations or pulsations while braking, or a soft brake pedal, bring your vehicle to us for a thorough inspection. We'll provide you with an honest assessment of your brake system and recommend the necessary repairs to keep you and your passengers safe on the road.`}
            </div>
          </div>
        </div>
        <div className={styles.container_individual_services}>
          <div className={styles.container_image_services}>
            <Image
              src={alignment_pic}
              alt="alignment"
              layout="responsive"
              className={styles.image}
            />
          </div>
          <div className={styles.container_text_services}>
            <h3 className={styles.subtitle_services}>Wheel Alignment</h3>
            <div className={styles.text_services}>
              {`We know that proper wheel alignment is crucial to the safety and performance of your vehicle. Over time, your wheels can become misaligned due to factors such as potholes, rough roads, and normal wear and tear. This can cause your tires to wear unevenly, negatively affecting your vehicle's handling and fuel efficiency. Our team of skilled technicians uses state-of-the-art equipment to perform wheel alignments on all types of vehicles, from passenger cars to light trucks. We'll adjust the angles of your wheels to the manufacturer's specifications, ensuring that your tires are pointing in the right direction and making proper contact with the road. In addition to improving your vehicle's handling and fuel efficiency, proper wheel alignment can also extend the life of your tires and save you money in the long run. If you're experiencing any symptoms of misaligned wheels, such as uneven tire wear or drifting while driving, bring your vehicle to us for an inspection. We'll provide you with a detailed report of your wheel alignment status and recommend any necessary repairs or adjustments. With our expert wheel alignment services, you can enjoy a safer, smoother, and more comfortable ride.`}
            </div>
          </div>
        </div>
        <div className={styles.container_individual_services}>
          <div className={styles.container_image_services}>
            <Image
              src={battery_pic}
              alt="battery"
              layout="responsive"
              className={styles.image}
            />
          </div>
          <div className={styles.container_text_services}>
            <h3 className={styles.subtitle_services}>Battery</h3>
            <div className={styles.text_services}>
              {`We offer high-quality car battery services to keep your vehicle starting strong. Our expert technicians can test your battery, replace it if needed, and check the charging system to ensure optimal performance. We use top-of-the-line batteries from trusted brands to provide you with reliable and long-lasting power. If you're experiencing any issues with your car battery, such as slow cranking or a dead battery, bring your vehicle to us for a quick and professional solution.`}
            </div>
          </div>
        </div>
        <div className={styles.container_individual_services}>
          <div className={styles.container_image_services}>
            <Image
              src={exhaust_pic}
              alt="exhaust"
              layout="responsive"
              className={styles.image}
            />
          </div>
          <div className={styles.container_text_services}>
            <h3 className={styles.subtitle_services}>Exhaust</h3>
            <div className={styles.text_services}>
              {`A damaged or malfunctioning exhaust system can cause decreased fuel efficiency, increased emissions, and even compromise your safety. Our experienced technicians are trained to diagnose and repair any issues with your exhaust system, from leaks to broken hangers. We use high-quality exhaust parts and products to ensure the best performance and longevity for your vehicle. Our exhaust services include exhaust pipe repair and replacement, muffler repair and replacement, catalytic converter repair and replacement, and exhaust manifold repair and replacement. We'll provide you with an honest assessment of your exhaust system and recommend the necessary repairs to keep your vehicle running smoothly and safely. If you're experiencing any exhaust-related issues, such as a loud exhaust or strange smells, bring your vehicle to us for a thorough inspection. We'll provide you with a detailed report of your exhaust system status and recommend any necessary repairs or replacements.`}
            </div>
          </div>
        </div>
        <div className={styles.container_individual_services}>
          <div className={styles.container_image_services}>
            <Image
              src={tires_pic}
              alt="tires"
              layout="responsive"
              className={styles.image}
            />
          </div>
          <div className={styles.container_text_services}>
            <h3 className={styles.subtitle_services}>Tires</h3>
            <div className={styles.text_services}>
              {`We offer a wide range of tire services to keep you driving safely and smoothly. Our expert technicians can help you with everything from tire rotations and balancing to flat tire repairs and tire replacements. We use high-quality tires from trusted brands to provide you with optimal performance and longevity. If you're experiencing any tire-related issues, such as uneven tire wear or vibrations while driving, bring your vehicle to us for a quick and professional solution. We'll provide you with a detailed report of your tire status and recommend any necessary services to keep you driving with confidence. With our expert tire services, you can enjoy a safer, smoother, and more comfortable ride.`}
            </div>
          </div>
        </div>
        <div className={styles.container_individual_services}>
          <div className={styles.container_image_services}>
            <Image
              src={suspension_pic}
              alt="Suspension"
              layout="responsive"
              className={styles.image}
            />
          </div>
          <div className={styles.container_text_services}>
            <h3 className={styles.subtitle_services}>Suspension</h3>
            <div className={styles.text_services}>
              {`We understand the importance of a properly functioning suspension system. A damaged or worn suspension can cause a rough ride, poor handling, and even compromise your safety. Our experienced technicians are trained to diagnose and repair any issues with your suspension system, from worn shocks and struts to broken springs and bushings. We use high-quality suspension parts and products to ensure the best performance and longevity for your vehicle. Our suspension services include shock and strut replacement, spring replacement, ball joint replacement, control arm replacement, and more. We'll provide you with an honest assessment of your suspension system and recommend the necessary repairs to keep your vehicle running smoothly and safely. If you're experiencing any suspension-related issues, such as bouncing or bottoming out while driving, bring your vehicle to us for a thorough inspection. We'll provide you with a detailed report of your suspension system status and recommend any necessary repairs or replacements.`}
            </div>
          </div>
        </div>
        <div className={styles.container_individual_services}>
          <div className={styles.container_image_services}>
            <Image
              src={oil_pic}
              alt="Oil"
              layout="responsive"
              className={styles.image}
            />
          </div>
          <div className={styles.container_text_services}>
            <h3 className={styles.subtitle_services}>Oil Change</h3>
            <div className={styles.text_services}>
              {`We offer fast and reliable oil change services to keep your vehicle running smoothly. Our expert technicians can perform oil changes on all makes and models of cars, trucks, and SUVs, using only high-quality oil and filters. Regular oil changes are crucial to the health and longevity of your vehicle's engine. We recommend getting an oil change every 3,000 to 5,000 miles, or as recommended by your vehicle's manufacturer. During your oil change service, we'll also perform a comprehensive inspection of your vehicle's fluids and filters, including the transmission fluid, coolant, brake fluid, and air filter. This helps ensure your vehicle is running at its best and can help identify any potential issues before they become bigger problems.`}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
