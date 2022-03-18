import styles from "../../styles/screensbar.module.sass";
import Link from "next/link";

export default function ScreensBar() {
  return (
    <div className={styles.screens}>
      <Link href="/">
        <a className={styles.pages}>Home</a>
      </Link>
      <Link href="/screens/Menu">
        <a className={styles.pages}>Menu</a>
      </Link>
      <Link href="/screens/Recipes">
        <a className={styles.pages}>Recipes</a>
      </Link>
      <Link href="/screens/Download">
        <a className={styles.pages}>Download</a>
      </Link>
      <Link href="/screens/AboutUs">
        <a className={styles.pages}>About Us</a>
      </Link>
    </div>
  );
}
