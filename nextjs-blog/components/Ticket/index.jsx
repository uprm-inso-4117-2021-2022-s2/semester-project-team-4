import { items } from "../../util/constants";
import styles from "../../styles/ticket.module.sass";
import { quantity } from "../Header";

export default function Ticket() {
  return (
    <div className={styles.right}>
      <h2 className={styles.h1}>Checkout</h2>
      <div>
        {items.length !== 0 &&
          items.map((i) => (
            <span className={styles.row}>
              <p className={styles.name}>{i.name}</p>
              {i.quantity > 1 && (
                <p className={styles.price} id="amount">
                  {i.quantity}x
                </p>
              )}
              <p className={styles.price}>${i.price.toFixed(2)}</p>
            </span>
          ))}
      </div>
      <span className={styles.wrapTotal}>
        <span className={styles.row}>
          <h3 className={styles.name}>Items</h3>
          <p className={styles.price}>{quantity(items)}</p>
        </span>
        <span className={styles.row}>
          <h3 className={styles.name}>Subtotal</h3>
          <p className={styles.price}>${suma(items)}</p>
        </span>
        <span className={styles.row}>
          <h3 className={styles.name}>x Tax (7%)</h3>
          <p className={styles.price}>${tax(items)}</p>
        </span>
        <span className={styles.divider} />
        <span className={styles.row}>
          <h3 className={styles.total}>Total</h3>
          <p className={styles.total}>${total(items)}</p>
        </span>
      </span>
      <button className={styles.button}>
        <p className={styles.price}>Place Order</p>
      </button>
    </div>
  );
}

function suma(array) {
  let suma = 0.0;
  {
    array.map((i) => {
      suma += i.price;
    });
  }
  return suma.toFixed(2);
}

function total(array) {
  return (suma(array) * 1.07).toFixed(2);
}

function tax(array) {
  return (suma(array) * 0.07).toFixed(2);
}
