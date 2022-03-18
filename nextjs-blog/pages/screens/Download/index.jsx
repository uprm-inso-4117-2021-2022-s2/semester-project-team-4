import Header from "../../../components/Header";
import styles from "../../../styles/download.module.sass";

export default function Download() {
  return (
    <body className={styles.background}>
      <div className={styles.container}>
        <Header />
        <h1>Download Page</h1>
      </div>
    </body>
  );
}
