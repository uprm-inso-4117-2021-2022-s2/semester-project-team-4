import styles from "../styles/app.module.sass";
import Header from "../components/Header";
import Home from "./screens/Home";

export default function App() {
  return (
    <body className={styles.background}>
      <div className={styles.container}>
        <Header onFocus="home" />
        <Home />
      </div>
    </body>
  );
}
