import ElementStyles from "./burger-element.module.css";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import { useRef } from "react";
import { FoodPropTypes } from "../../../utils/data";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { FILTER } from "../../../services/reducers/cart";

export function BurgerElement(props) {
  const dispatch = useDispatch();
  const IngredientRef = useRef();
  const bunRef = useRef();

 const [, dropItem] = useDrop({
    accept: "card", //нашла здесь 1 ошибку, вместо card было items, из-за этого не работал перенос внутри контейнера
    drop: (item) => {
      dispatch({
        type: FILTER,
        item: item,
        index: props.index,
      });
    },
  });

  const [{ isDragging }, dragItem] = useDrag({
    type: "card",
    item: props.item,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  dragItem(dropItem(IngredientRef));
  const opacity = isDragging ? 0 : 1;

  return (
    <li
      className={ElementStyles.item}
      ref={props.item.type !== "bun" ? IngredientRef : bunRef}
      style={{ opacity }}
    >
      {props.item.type !== "bun" ? (
        <span className={ElementStyles.drag}>
          <DragIcon type="primary" />
        </span>
      ) : (
        <span />
      )}
      <ConstructorElement
        type={props.item.type === "bun" ? props.type : ""}
        isLocked={props.item.type === "bun"}
        text={
          props.item.name +
          (props.type === "top" ? "\n(верх)" : "") +
          (props.type === "bottom" ? "\n(низ)" : "") +
          (props.item.count > 1 ? " x" + props.item.count : "")
        }
        price={props.item.price}
        thumbnail={props.item.image}
        handleClose={() => props.deleteItem(props.item)}
      />
    </li>
  );
}

BurgerElement.propTypes = {
  item: FoodPropTypes.isRequired,
};
