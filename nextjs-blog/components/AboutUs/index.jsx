import Image from "next/image";
import styles from "../../styles/aboutcomponent.module.sass";
import phone from "../../public/phone.png";
import location from "../../public/location.png";
import ChooseFood from "../ChooseFood";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <ChooseFood />
      <div className={styles.right}>
        <Link href="/screens/AboutUs">
          <h4 className={styles.h4}>About Us</h4>
        </Link>
        <p className={styles.description}>
          We are delighted to welcome you to OrderUp! Here you can order food
          for <br /> yourself and not worry about its quality time. We’ll take
          care of you.
        </p>
        <div className={styles.info}>
          <span className={styles.contact}>
            <span>
              <Image src={phone} />
            </span>
            <p className={styles.p}>787-654-9876</p>
          </span>
          <span className={styles.contact}>
            <span>
              <Image src={location} />
            </span>
            <p className={styles.p}>
              274 Calle Ramirez de Arellano, <br />
              Mayaguez, Puerto Rico
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
