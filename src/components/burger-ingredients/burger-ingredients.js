import IngredientStyles from "./burger-ingredients.module.css";
import PropTypes from "prop-types";
import { Tabs } from "./tabs/tabs";
import { TabsItem } from "./tabs/items/items";
import { useSelector } from "react-redux";

export function TabsCategory(props) {
  const menu = useSelector(function (state) {
    return state.menu;
  });
  const cart = useSelector(function (state) {
    return state.cart;
  });
  const items = menu.items.data.filter(function (category) {
    return category.type === props.category;
  });
  return (
    <ul className={IngredientStyles.items}>
      {items.map(function (item) {
        return (
          <TabsItem
            key={item._id}
            item={item}
            basketCart={cart.cart.filter((i) => i._id === item._id)}
          />
        );
      })}
    </ul>
  );
}

TabsCategory.propTypes = {
  category: PropTypes.string.isRequired,
};

function BurgerIngredients() {
  return (
    <div className={IngredientStyles.heading}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      {<Tabs />}
    </div>
  );
}

export default BurgerIngredients;