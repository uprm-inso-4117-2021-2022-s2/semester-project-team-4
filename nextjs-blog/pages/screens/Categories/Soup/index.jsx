import Header from "../../../../components/Header";
import styles from "../../../../styles/soup.module.sass";

export default function Soup() {
  return (
    <body className={styles.background}>
      <div className={styles.container}>
        <Header />
        <h1>Soup Page</h1>
      </div>
    </body>
  );
}
