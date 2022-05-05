import Header from "../../../components/Header";
import styles from "../../../styles/menu.module.sass";
import Categories from "../../../components/Categories";
import breakfast from "../../../public/breakfast.png";
import lunch from "../../../public/lunch.png";
import appet from "../../../public/appetizers.png";
import salad from "../../../public/soups.png";
import FoodSection from "../../../components/FoodSection";
import {
  appetizerInfo,
  breakfastInfo,
  dessertInfo,
  drinkInfo,
  lunchInfo,
  saladInfo,
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
          {breakfastInfo == 0 ? (
            <></>
          ) : (
            <FoodSection
              array={breakfastInfo}
              title={breakfast}
              id="breakfast"
            />
          )}
          {lunchInfo == 0 ? (
            <></>
          ) : (
            <FoodSection array={lunchInfo} title={lunch} id="lunch" />
          )}
          {appetizerInfo == 0 ? (
            <></>
          ) : (
            <FoodSection array={appetizerInfo} title={appet} id="appetizer" />
          )}
          {saladInfo == 0 ? (
            <></>
          ) : (
            <FoodSection array={saladInfo} title={salad} id="salad" />
          )}
          {dessertInfo == 0 ? (
            <></>
          ) : (
            <FoodSection array={dessertInfo} title={salad} id="dessert" />
          )}
          {drinkInfo == 0 ? (
            <></>
          ) : (
            <FoodSection array={drinkInfo} title={salad} id="drink" />
          )}
        </div>
      </div>
    </body>
  );
}
