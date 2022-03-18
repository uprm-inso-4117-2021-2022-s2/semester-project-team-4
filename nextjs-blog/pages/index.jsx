import styles from "../styles/home.module.sass";
import Board from "../components/Board";
import Categories from "../components/Categories";
import HowToOrder from "../components/HowToOrder";
import AboutUs from "../components/AboutUs";
import Header from "../components/Header";

export default function Home(props) {
  return (
    <body className={styles.background}>
      <div className={styles.container}>
        <Header />
        <Board />
        <div className={styles.categories}>
          <h3 className={styles.seccionName}>Categories</h3>
          <Categories />
        </div>
        <HowToOrder />
        <AboutUs />
      </div>
    </body>
  );
}
