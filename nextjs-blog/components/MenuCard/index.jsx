import styles from "../../styles/menuCard.module.sass";
import Image from "next/image";
import check from "../../public/checkCircle.png";
import { useState } from "react";
import { items } from "../../util/constants";

export default function MenuCard({
  id = "",
  name = "",
  cal = "",
  price = "",
  url = "",
  photo = false,
  isAdded,
  array,
}) {
  const [add, setAdd] = useState(false);
  return (
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
          {isAdded || add ? (
            <span className={styles.check}>
              <Image src={check} />
            </span>
          ) : (
            <button
              className={styles.button}
              onClick={() => {
                setAdd(true);
                let amount = 1;
                items.push({
                  id,
                  name,
                  cal,
                  price,
                  url,
                  isAdded: true,
                  quantity: amount,
                });
                array.map((i) => {
                  i.id === id && (i.isAdded = true);
                });
              }}
            >
              <p>Add</p>
            </button>
          )}
        </span>
      </div>
    </div>
  );
}

function whichButton() {
  return (
    <>
      {items.length !== 0 &&
        items.map(() => {
          <span className={styles.check}>
            <Image src={check} />
          </span>;
        })}
      {add ? (
        <span className={styles.check}>
          <Image src={check} />
        </span>
      ) : (
        <button
          className={styles.button}
          onClick={() => {
            setAdd(true);
            items.push({ id, name, cal, price, url, isAdded: true });
          }}
        >
          <p>Add</p>
        </button>
      )}
    </>
  );
}
