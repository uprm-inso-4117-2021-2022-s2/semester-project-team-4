import search from "../../public/search.png";
import Image from "next/image";
import styles from "../../styles/search.module.sass";

export default function Search() {
  return (
    <div className={styles.container}>
      <input autoFocus placeholder="Search" className={styles.search} />
      <button className={styles.icon}>
        <Image src={search} width={22} height={22} />
      </button>
    </div>
  );
}
