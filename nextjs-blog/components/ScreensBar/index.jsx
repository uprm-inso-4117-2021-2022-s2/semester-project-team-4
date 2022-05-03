import styles from "../../styles/screensbar.module.sass";
import Link from "next/link";
import { setState } from "react";
import cn from "classnames";

export default function ScreensBar({ onFocus = "" }) {
  return (
    <div className={styles.screens}>
      <button className={onFocus === "home" ? styles.active : styles.pages}>
        <Link href="/">
          <p>Home</p>
        </Link>
      </button>
      <button className={onFocus === "menu" ? styles.active : styles.pages}>
        <Link href="/screens/Menu">
          <p>Menu</p>
        </Link>
      </button>
      <button className={onFocus === "recipes" ? styles.active : styles.pages}>
        <Link href="/screens/Recipes">
          <p>Recipes</p>
        </Link>
      </button>
      <button className={onFocus === "aboutus" ? styles.active : styles.pages}>
        <Link href="/screens/AboutUs">
          <p>About Us</p>
        </Link>
      </button>
    </div>
  );
}
