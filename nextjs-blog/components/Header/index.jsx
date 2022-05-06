import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/header.module.sass";
import ScreensBar from "../ScreensBar";
import Search from "../Search";
import logo from "../../public/logo.jpg";
import cart from "../../public/cart.png";
import { items } from "../../util/constants";

export default function Header({ onFocus }) {
  return (
    <div className={styles.header}>
      <Image src={logo} />
      <ScreensBar onFocus={onFocus} />
      <span className={styles.right}>
        <Search />
        <span>
          <span className={styles.number} id="cartAmount">
            {quantity()}
          </span>
          <span
            className={onFocus === "bag" ? styles.active : styles.logoContainer}
          >
            <Link href="/screens/ShoppingCart">
              <Image
                src={cart}
                width="30"
                height="30"
                objectFit="contain"
                placeholder="Shopping Cart"
              />
            </Link>
          </span>
        </span>
      </span>
    </div>
  );
}

export function quantity() {
  const quantity = 0;
  items.map((i) => {
    quantity += i.quantity;
  });
  return quantity;
}
