import Header from "../../../../components/Header";
import styles from "../../../../styles/breakfast.module.sass";

export default function Breakfast() {
  return (
    <body className={styles.background}>
      <div className={styles.container}>
        <Header />
        <h1>Breakfast Page</h1>
      </div>
    </body>
  );
}
