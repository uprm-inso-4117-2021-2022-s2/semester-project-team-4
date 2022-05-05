import Button from "../Button";
import styles from "../../styles/board.module.sass";
import text from "../../public/specialoffers.png";
import Image from "next/image";
import phones from "../../public/phones.png";

export default function Board() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image
          src={text}
          objectFit="contain"
          className={styles.image}
          placeholder="Special Offers"
        />
        <h1 className={styles.h1}>Order Your Best Food Anytime.</h1>
        <p className={styles.p}>
          {" "}
          The best food at the best price. Choose from the variety of options we
          offer.
        </p>
        <span className={styles.button}>
          <Button color="orange" text="START ORDER" href="/screens/Menu" />
        </span>
      </div>
      <div className={styles.right}>
        <Image src={phones} />
      </div>
    </div>
  );
}
