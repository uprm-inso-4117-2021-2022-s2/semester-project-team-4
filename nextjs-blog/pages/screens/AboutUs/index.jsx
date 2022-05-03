import Header from "../../../components/Header";
import styles from "../../../styles/aboutus.module.sass";

export default function AboutUs() {
  return (
    <body className={styles.background}>
      <div className={styles.container}>
        <Header onFocus="aboutus" />
        <h1>About Us Page</h1>
      </div>
    </body>
  );
}
