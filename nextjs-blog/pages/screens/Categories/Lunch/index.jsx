import Header from "../../../../components/Header";
import styles from "../../../../styles/lunch.module.sass";
import Card from "../../../../components/Card";
import Link from "next/link";

export default function Lunch() {
  return (
    <body className={styles.background}>
      <div className={styles.container}>
        <Header />
        <div className={styles.body}>
          <h1 className={styles.h1}>Lunch Menu</h1>
          <p className={styles.p}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <br />
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud <br />
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <div className={styles.cards}>
            <Link href="/screens/Categories/Breakfast">
              <Card
                name="Bacon Rancher"
                cal="1,300"
                price="$7.50"
                url={burger}
                category={false}
              />
            </Link>
            <Link href="/screens/Categories/Lunch">
              <Card
                name="Pepperoni Pizza"
                cal="990"
                price="9.79"
                url={pizza}
                category={false}
              />
            </Link>
            <Link href="/screens/Categories/Appetizers">
              <Card
                name="Cajun Chicken Pasta"
                cal="890"
                price="8.99"
                url={pasta}
                category={false}
              />
            </Link>
            <Link href="/screens/Categories/Soup">
              <Card
                name="Beef Bacon Ranch Quesadillas"
                cal="6.99"
                price="9.79"
                url={quesadilla}
                category={false}
              />
            </Link>
            <Link href="/screens/Categories/Desserts">
              <Card
                name="Half Order Ribs"
                cal="999"
                price="12.79"
                url={ribs}
                category={false}
              />
            </Link>
            <Link href="/screens/Categories/Beverages">
              <Card
                name="Chicken Fajitas"
                cal="654"
                price="8.50"
                url={fajitas}
                category={false}
              />
            </Link>
          </div>
        </div>
      </div>
    </body>
  );
}

const pizza =
  "https://www.recipetineats.com/wp-content/uploads/2020/05/Pepperoni-Pizza_5-SQjpg.jpg";
const burger =
  "https://sweetsavoryandsteph.com/wp-content/uploads/2020/09/IMG_2461-scaled.jpg";
const pasta =
  "https://simply-delicious-food.com/wp-content/uploads/2020/07/Cajun-chicken-pasta-2.jpg";
const ribs =
  "https://fridays.hu/wp-content/uploads/2016/05/JD-Ribs-Shrimp-1.jpg";
const quesadilla =
  "https://spicysouthernkitchen.com/wp-content/uploads/Chicken-Bacon-Ranch-Quesadilla-a.jpg";
const fajitas =
  "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Flavorful-Chicken-Fajitas_EXPS_CIW19_12540_B08_30_6b.jpg";
