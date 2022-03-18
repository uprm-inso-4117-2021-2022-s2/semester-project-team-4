import styles from "../../styles/categories.module.sass";
import bread from "../../public/bread.png";
import Image from "next/image";
import fries from "../../public/Fries.png";
import icecream from "../../public/Ice cream.png";
import soup from "../../public/soup.png";
import coffee from "../../public/coffee.png";
import pizza from "../../public/Pizza.png";
import Link from "next/link";

export default function Categories() {
  return (
    <div className={styles.container}>
      <Link href="/screens/Categories/Breakfast">
        <div className={styles.card}>
          <span className={styles.circle}>
            <Image src={bread} />
          </span>
          <p className={styles.label}>Breakfast</p>
        </div>
      </Link>
      <Link href="/screens/Categories/Appetizers">
        <div className={styles.card}>
          <span className={styles.circle}>
            <Image src={fries} />
          </span>
          <p className={styles.label}>Appetizers</p>
        </div>
      </Link>
      <Link href="/screens/Categories/Lunch">
        <div className={styles.card}>
          <span className={styles.circle}>
            <Image src={pizza} />
          </span>
          <p className={styles.label}>Lunch</p>
        </div>
      </Link>
      <Link href="/screens/Categories/Dessert">
        <div className={styles.card}>
          <span className={styles.circle}>
            <Image src={icecream} />
          </span>
          <p className={styles.label}>Desserts</p>
        </div>
      </Link>
      <Link href="/screens/Categories/Soup">
        <div className={styles.card}>
          <span className={styles.circle}>
            <Image src={soup} />
          </span>
          <p className={styles.label}>Soups & Salads</p>
        </div>
      </Link>
      <Link href="/screens/Categories/Beverage">
        <div className={styles.card}>
          <span className={styles.circle}>
            <Image src={coffee} />
          </span>
          <p className={styles.label}>Beverages</p>
        </div>
      </Link>
    </div>
  );
}
