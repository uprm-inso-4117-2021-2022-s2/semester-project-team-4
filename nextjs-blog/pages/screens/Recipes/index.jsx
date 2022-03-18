import Header from "../../../components/Header";
import styles from "../../../styles/recipes.module.sass";

export default function Recipes() {
  return (
    <body className={styles.background}>
      <div className={styles.container}>
        <Header />
        <h1>Recipes Page</h1>
      </div>
    </body>
  );
}
