import Header from "../../../components/Header";
import styles from "../../../styles/shoppingbag.module.sass";

export default function ShoppingBag() {
  return (
    <body className={styles.background}>
      <div className={styles.container}>
        <Header />
        <h1>Shopping Bag Page</h1>
      </div>
    </body>
  );
}
