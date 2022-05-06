import styles from "../../styles/shoppingCard.module.sass";
import Image from "next/image";
import { items } from "../../util/constants";

export default function ShoppingCard({
  id,
  name,
  cal,
  price,
  photo,
  url,
  quantity,
}) {
  return (
    <>
      {quantity && (
        <div className={styles.cardContainer}>
          {photo && (
            <div className={styles.photoContainer}>
              <span className={styles.number} id="quantity">
                {quantity}
              </span>
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
              <h4 className={styles.price}>${price.toFixed(2)}</h4>
              <span className={styles.buttonWrap}>
                <button
                  id="update"
                  className={styles.plus}
                  onClick={() => {
                    items.map((i) => {
                      i.id === id && (i.quantity += 1) && (quantity += 1);
                      document.getElementById("quantity").innerHTML = quantity;
                    });
                  }}
                >
                  <p className={styles.p}>+</p>
                </button>
                <button
                  className={styles.minus}
                  onClick={() => {
                    items.map((i) => {
                      i.id === id &&
                        i.quantity !== 0 &&
                        (i.quantity -= 1) &&
                        (quantity -= 1);
                      document.getElementById("quantity").innerHTML = quantity;
                    });
                  }}
                >
                  <p className={styles.p}>-</p>
                </button>
              </span>
            </span>
          </div>
        </div>
      )}
    </>
  );
}
