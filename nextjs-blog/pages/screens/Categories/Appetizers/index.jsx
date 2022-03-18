import Header from "../../../../components/Header";
import styles from "../../../../styles/appetizers.module.sass";

export default function Appetizers() {
  return (
    <body className={styles.background}>
      <div className={styles.container}>
        <Header />
        <h1>Appetizers Page</h1>
      </div>
    </body>
  );
}
