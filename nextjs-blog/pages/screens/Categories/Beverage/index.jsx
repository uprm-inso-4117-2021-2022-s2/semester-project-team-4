import Header from "../../../../components/Header";
import styles from "../../../../styles/beverage.module.sass";

export default function Beverage() {
  return (
    <body className={styles.background}>
      <div className={styles.container}>
        <Header />
        <h1>Beverage Page</h1>
      </div>
    </body>
  );
}
