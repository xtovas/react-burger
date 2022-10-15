import { useState } from "react";
import React from "react";
import PropTypes from "prop-types";
import { FoodPropTypes } from "../../utils/data";
import { arrayOf } from "prop-types";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {
  ConstructorElement,
  DragIcon,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorStyles from "./burger-constructor.module.css";

BurgerElement.propTypes = {
  item: PropTypes.shape(FoodPropTypes),
}

const BurgerConstructor = (props) => {
  const [isOpen, setModal] = React.useState(false)
  const close = ()=> {
    setModal(false);
  }
  const openModal = () => {
    setModal(true);
  }
  const [state] = useState({
    items: props.data.map((item) =>
      item.type !== "bun" ? <BurgerElement key={item._id} item={item} /> : ""
    ),
    bun: props.data.filter((item) => item.type === "bun"),
  });

  return (
    <div className={ConstructorStyles.orderContainer}>
      {state.bun[0] ? <BurgerElement item={state.bun[0]} type="top" /> : ""}
      <ul className={ConstructorStyles.orderContent}>{state.items}</ul>
      {state.bun[0] ? <BurgerElement item={state.bun[0]} type="bottom" /> : ""}
      <div className={ConstructorStyles.priceContainer}>
        <p className={ConstructorStyles.price}>
          <span className="text text_type_digits-medium">610</span>
          <CurrencyIcon type="primary" />
        </p>
        <Button type="primary" size="medium" onClick={openModal}>
          Оформить заказ
        </Button>
      </div>
      {isOpen && (
      <Modal close={close}>
        <OrderDetails />
        </Modal>
      )}
    </div>
  );
};

export default BurgerConstructor;

function BurgerElement(ingredients) {
  return (
    <li className={ConstructorStyles.item}>
      {ingredients.item.type !== "bun" ? (
        <DragIcon type="primary"></DragIcon>
      ) : (
        <span></span>
      )}
      <ConstructorElement
        type={ingredients.item.type === "bun" ? ingredients.type : ""}
        isLocked={ingredients.item.type === "bun"}
        text={ingredients.item.name}
        price={ingredients.item.price}
        thumbnail={ingredients.item.image}
      ></ConstructorElement>
    </li>
  );
}

BurgerConstructor.propTypes = {
  data: arrayOf(FoodPropTypes).isRequired,
};