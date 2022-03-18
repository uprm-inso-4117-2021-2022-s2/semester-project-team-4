import Header from "../../../components/Header";
import styles from "../../../styles/menu.module.sass";
import Card from "../../../components/Card";
import Link from "next/link";

export default function Menu() {
  return (
    <body className={styles.background}>
      <div className={styles.container}>
        <Header />
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
          <div className={styles.cards}>
            <Link href="/screens/Categories/Breakfast">
              <Card name="Breakfast" url={breakfast} category={true} />
            </Link>
            <Link href="/screens/Categories/Lunch">
              <Card name="Lunch" url={lunch} category={true} />
            </Link>
            <Link href="/screens/Categories/Appetizers">
              <Card name="Appetizers" url={appetizer} category={true} />
            </Link>
            <Link href="/screens/Categories/Soup">
              <Card name="Soup Salads" url={salad} category={true} />
            </Link>
            <Link href="/screens/Categories/Desserts">
              <Card name="Desserts" url={dessert} category={true} />
            </Link>
            <Link href="/screens/Categories/Beverages">
              <Card name="Beverages" url={drinks} category={true} />
            </Link>
          </div>
        </div>
      </div>
    </body>
  );
}

const lunch =
  "https://res.cloudinary.com/hksqkdlah/image/upload/43859-sfs-maple-bacon-burger-216.jpg";
const breakfast =
  "https://www.simplyrecipes.com/thmb/myvrOpGjCl0UnWdgjv7k-YZ_S9o=/2000x1333/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__05__EYF-Italian-Grilled-Cheese-LEAD-4-7052fb3d52574c4dad77dc2f28d72256.jpg";
const appetizer =
  "https://assets.bonappetit.com/photos/57acca3a53e63daf11a4da05/1:1/w_3145,h_3145,c_limit/mozzarella-sticks.jpg";
const dessert =
  "https://www.seriouseats.com/thmb/g5fvosshudR6YeqE5LJgwSTLS-s=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__06__20170526-no-bake-cheesecake-vicky-wasik-18-89991c64ba544e19bc05c774c499438c.jpg";
const salad =
  "https://media-cdn.tripadvisor.com/media/photo-s/11/26/c5/9f/soup-salad-combos.jpg";
const drinks =
  "https://businessmirror.com.ph/wp-content/uploads/2017/11/hf01-110217.jpg";
