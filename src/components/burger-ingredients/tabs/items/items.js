import { OPEN_ITEM } from "../../../../services/reducers/item";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { FoodPropTypes } from "../../../../utils/data";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ItemStyles from "./items.module.css";
export const TabsItem = (props) => {
  const dispatch = useDispatch();

  const [{ opacity }, ref] = useDrag({
    type: "items",
    item: props.item,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  return (
      <div
        className={ItemStyles.item}
        onClick={() => dispatch({ type: OPEN_ITEM, item: props.item })}
        ref={ref}
        style={{ opacity }}
      >
        <div className={ItemStyles.item_image}>
          <img src={props.item.image} alt={props.item.name} />
        </div>
        <div className={ItemStyles.item_price}>
          <span className="text text_type_digits-default">
            {props.item.price}
          </span>
          <CurrencyIcon type="primary" />
        </div>
        <h3 className={`${ItemStyles.item_title} text text_type_main-default`}>
          {props.item.name}
        </h3>
        {props.basketCart && (
          <Counter count={props.basketCart.count} size="default" />
        )}
      </div>
  );
};

TabsItem.propTypes = {
  item: FoodPropTypes.isRequired,
};