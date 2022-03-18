import Header from "../../../../components/Header";
import styles from "../../../../styles/dessert.module.sass";

export default function Dessert() {
  return (
    <body className={styles.background}>
      <div className={styles.container}>
        <Header />
        <h1>Dessert Page</h1>
      </div>
    </body>
  );
}
