import Header from "../../../components/Header";
import styles from "../../../styles/menu.module.sass";
import Categories from "../../../components/Categories";
import breakfast from "../../../public/breakfast.png";
import lunch from "../../../public/lunch.png";
import appet from "../../../public/appetizers.png";
import salad from "../../../public/soups.png";
import FoodSection from "../../../components/FoodSection";
import {
  appetizerNames,
  breakfastNames,
  dessertNames,
  drinkNames,
  lunchNames,
  saladNames,
} from "../../../util/constants";

export default function Menu() {
  return (
    <body className={styles.background}>
      <div className={styles.container}>
        <Header onFocus="menu" />
        <div className={styles.body}>
          <h1 className={styles.h1}>Categories</h1>
          <p className={styles.p}>
            Enjoy our variety of foods. Breakfast is the most important meal of
            the day, don't skip it. For lunch we have burgers, <br />
            chicken, salads, and much more. Order them with the side of your
            preference. If you want something sweet <br />
            we have different desserts, some are low in sugar. In addition, you
            can try some of our natural juices. don't forget to hydrate.
          </p>
          <Categories />
          {breakfastNames == 0 ? (
            <></>
          ) : (
            <FoodSection
              array={breakfastNames}
              title={breakfast}
              id="breakfast"
            />
          )}
          {lunchNames == 0 ? (
            <></>
          ) : (
            <FoodSection array={lunchNames} title={lunch} id="lunch" />
          )}
          {appetizerNames == 0 ? (
            <></>
          ) : (
            <FoodSection array={appetizerNames} title={appet} id="appetizer" />
          )}
          {saladNames == 0 ? (
            <></>
          ) : (
            <FoodSection array={saladNames} title={salad} id="salad" />
          )}
          {dessertNames == 0 ? (
            <></>
          ) : (
            <FoodSection array={dessertNames} title={salad} id="dessert" />
          )}
          {drinkNames == 0 ? (
            <></>
          ) : (
            <FoodSection array={drinkNames} title={salad} id="drink" />
          )}
        </div>
      </div>
    </body>
  );
}
