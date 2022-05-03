import styles from "../../styles/card.module.sass";
import Image from "next/image";

export default function Card({
  name = "",
  cal = "",
  price = "",
  url = "",
  photo = false,
  isAdded = false,
}) {
  return (
    <>
      <div className={styles.container}>
        {photo && (
          <div className={styles.photoContainer}>
            <Image
              className={styles.photo}
              src={url}
              layout="responsive"
              width={10}
              height={10}
            />
          </div>
        )}
        <div className={styles.info}>
          <p className={styles.name}>{name}</p>
          <span className={styles.text}>
            <p className={styles.bold}>{cal}</p>
            <p className={styles.cal}>calories</p>
          </span>
          <span className={styles.wrap}>
            <h4 className={styles.price}>${price}</h4>
            {isAdded ? (
              <span className={styles.buttonWrap}>
                <button className={styles.button}>
                  <p className={styles.p}>+</p>
                </button>
                <button className={styles.button}>
                  <p className={styles.p}>-</p>
                </button>
              </span>
            ) : (
              <button className={styles.button} onClick={""}>
                <p className={isAdded && styles.p}>Add</p>
              </button>
            )}
          </span>
        </div>
      </div>
    </>
  );
}
