import Header from "../../../components/Header";
import styles from "../../../styles/shoppingbag.module.sass";
import { items } from "../../../util/constants";
import Card from "../../../components/ShoppingCard";
import Ticket from "../../../components/Ticket";
import { useState, setState } from "react";

export default function ShoppingCart() {
  return (
    <body className={styles.background}>
      <div className={styles.container}>
        <Header onFocus="bag" />
        <div className={styles.bottom}>
          <div className={styles.left}>
            <h2 className={styles.h1}>Shopping Cart</h2>
            <div className={styles.cardContainer} id="cardContainer">
              {items.length !== 0 ? (
                items.map((i) => (
                  <Card
                    id={i.id}
                    name={i.name}
                    url={i.url}
                    cal={i.cal}
                    price={i.price}
                    photo={i.url !== ""}
                    quantity={i.quantity}
                  />
                ))
              ) : (
                <h2 className={styles.h2}>No items added at the moment.</h2>
              )}
            </div>
          </div>
          <div className={styles.divider} />
          {items.length !== 0 && <Ticket />}
        </div>
      </div>
    </body>
  );
}

export function addItem(i) {}
