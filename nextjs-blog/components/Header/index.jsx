import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/header.module.sass";
import ScreensBar from "../ScreensBar";
import Search from "../Search";
import logo from "../../public/logo.jpg";
import bag from "../../public/bag.png";

export default function Header() {
  return (
    <div className={styles.header}>
      <Image src={logo} />
      <ScreensBar />
      <span className={styles.right}>
        <Search />
        <Link href="/screens/ShoppingBag">
          <Image
            src={bag}
            width={20}
            height={15}
            objectFit="contain"
            className={styles.icon}
            placeholder="Shopping Bag"
          />
        </Link>
      </span>
    </div>
  );
}
