import styles from "../../styles/categories.module.sass";
import Image from "next/image";
import Link from "next/link";
import { categoriesID, categoriesNames } from "../../util/constants";
import bread from "../../public/bread.png";
import fries from "../../public/Fries.png";
import icecream from "../../public/Ice cream.png";
import soup from "../../public/soup.png";
import coffee from "../../public/coffee.png";
import pizza from "../../public/Pizza.png";

export const categoriesImage = [bread, fries, icecream, soup, coffee, pizza];

export default function Categories() {
  return (
    <div className={styles.container}>
      {categoriesID.map((k, i) => (
        <Link href={"/screens/Menu/" + categoriesID[i]}>
          <div className={styles.card}>
            <span className={styles.circle}>
              <Image src={categoriesImage[i]} />
            </span>
            <p className={styles.label}>{categoriesNames[i]}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
