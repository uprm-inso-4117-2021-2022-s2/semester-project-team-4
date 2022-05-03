import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/header.module.sass";
import ScreensBar from "../ScreensBar";
import Search from "../Search";
import logo from "../../public/logo.jpg";
import bag from "../../public/bag.png";

export default function Header({ onFocus }) {
  return (
    <div className={styles.header}>
      <Image src={logo} />
      <ScreensBar onFocus={onFocus} />
      <span className={styles.right}>
        <Search />
        <button
          className={onFocus === "bag" ? styles.active : styles.logoContainer}
        >
          <Link href="/screens/ShoppingBag">
            <Image
              src={bag}
              width="30"
              height="25"
              objectFit="contain"
              placeholder="Shopping Bag"
            />
          </Link>
        </button>
      </span>
    </div>
  );
}
