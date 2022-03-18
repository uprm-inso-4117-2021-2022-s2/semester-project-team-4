import Button from "../Button";
import styles from "../../styles/card.module.sass";
import Image from "next/image";

export default function Card({
  name = "",
  cal = "",
  price = "",
  url = "",
  category = false,
}) {
  return (
    <>
      {category && (
        <div className={styles.container}>
          <div className={styles.photoContainer}>
            <Image
              className={styles.photo}
              src={url}
              layout="responsive"
              width={10}
              height={10}
            />
          </div>
          <p className={styles.label}>{name}</p>
        </div>
      )}
      {!category && (
        <div className={styles.container}>
          <div className={styles.photoContainer}>
            <Image
              className={styles.photo}
              src={url}
              layout="responsive"
              width={10}
              height={10}
            />
          </div>
          <div className={styles.info}>
            <p className={styles.name}>{name}</p>
            <span className={styles.text}>
              <p className={styles.bold}>{cal}</p>
              <p className={styles.cal}>calories</p>
            </span>
            <span className={styles.wrap}>
              <h4 className={styles.price}>${price}</h4>
              <span className={styles.button}>
                <Button color="orange" text="Add" />
              </span>
            </span>
          </div>
        </div>
      )}
    </>
  );
}
