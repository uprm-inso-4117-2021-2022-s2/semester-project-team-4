import styles from "../../styles/foodSection.module.sass";
import Card from "../Card";
import Image from "next/image";
import arrow from "../../public/arrow.png";

export default function FoodSection({ array, title, id }) {
  return (
    <div className={styles.container}>
      <span id={id} className={styles.sectionName}>
        <Image src={title} />
      </span>
      <span className={styles.divider}></span>
      <div className={styles.row}>
        <span className={styles.section} id={id + "scroll"}>
          {array.map((k) => (
            <Card
              name={k.name}
              url={k.url}
              cal={k.cal}
              price={k.price}
              photo={true}
              isAdded={false}
            />
          ))}
        </span>
        <span className={styles.arrow}>
          <button
            className={styles.button}
            onClick={() => {
              let content = document.getElementById(id + "scroll");
              content.scroll({
                left: window.innerWidth,
                behavior: "smooth",
              });
            }}
          >
            <Image src={arrow} height="18" width="12" />
          </button>
        </span>
      </div>
    </div>
  );
}

function Cards({ name, url, cal, price, photo = true, isAdded = false }) {
  return (
    <>
      <Card
        name={name}
        url={url}
        cal={cal}
        price={price}
        photo={photo}
        isAdded={isAdded}
      />
    </>
  );
}
