import Image from "next/image";
import pizza from "../../public/food.png";
import Button from "../Button";
import styles from "../../styles/choosefood.module.sass";

export default function ChooseFood() {
  return (
    <div className={styles.left}>
      <span>
        <Image src={pizza} />
      </span>
      <h5 className={styles.h5}>Choose your food</h5>
      <p className={styles.text}>
        Easily find your type of food craving and you’ll <br />
        get the order ready when you go to pick it up.
      </p>
      <span className={styles.button}>
        <Button color="orange" text="GET STARTED" href="/screens/Menu" />
      </span>
    </div>
  );
}
