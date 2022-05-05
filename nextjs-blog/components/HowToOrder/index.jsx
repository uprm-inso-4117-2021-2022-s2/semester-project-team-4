import Image from "next/image";
import clipboard from "../../public/clipboard.png";
import wallet from "../../public/wallet.png";
import check from "../../public/check.png";
import arrow from "../../public/arrow.png";
import styles from "../../styles/howToOrder.module.sass";

export default function HowToOrder() {
  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>How To Order</h3>
      <p className={styles.p}>
        Follow each of these easy steps to order the menu you want, wait and we
        are ready to do it for you to be ready to enjoy.
      </p>
      <div className={styles.cardSection}>
        <span className={styles.card1}>
          <span>
            <Image src={clipboard} />
          </span>
          <h4 className={styles.h5}>Choose Menu</h4>
          <p className={styles.p1}>
            Select the food or drink menu you want, please enter it into your
            shopping bag.
          </p>
        </span>
        {/*--------------------------------------------*/}
        <span className={styles.arrow1}>
          <Image src={arrow} />
        </span>
        <span className={styles.card}>
          <span>
            <Image src={wallet} />
          </span>
          <h4 className={styles.h5}>Checkout Order</h4>
          <p className={styles.p1}>
            Orders that are in your shopping cart now just do checkout, to be
            ready for processing.
          </p>
        </span>
        {/*--------------------------------------------*/}
        <span className={styles.arrow2}>
          <Image src={arrow} />
        </span>
        <span className={styles.card}>
          <span>
            <Image src={check} />
          </span>
          <h4 className={styles.h5}>Waiting for order to be ready</h4>
          <p className={styles.p1}>
            An estimated wait time is given. Then the order is ready to be
            picked up.
          </p>
        </span>
      </div>
    </div>
  );
}
