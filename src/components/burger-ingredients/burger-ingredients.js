import {
  Tab,
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { FoodPropTypes } from "../../utils/data";
import IngredientStyles from "./burger-ingredients.module.css";
import { arrayOf } from "prop-types";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal";
import { useState } from "react";

export default function BurgerIngredients(props) {
  return (
    <div className={IngredientStyles.heading}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <MenuNav></MenuNav>
      <Tabs data={props.data}></Tabs>
    </div>
  );
}

BurgerIngredients.propTypes = {
  data: arrayOf(FoodPropTypes).isRequired,
};

const MenuNav = () => {
  const [current, setCurrent] = React.useState("one");
  return (
    <div className={IngredientStyles.tabs}>
      <Tab
        className={IngredientStyles.tabName}
        value="one"
        active={current === "one"}
        onClick={setCurrent}
      >
        Булки
      </Tab>
      <Tab
        className={IngredientStyles.tabName}
        value="two"
        active={current === "two"}
        onClick={setCurrent}
      >
        Соусы
      </Tab>
      <Tab
        className={IngredientStyles.tabName}
        value="three"
        active={current === "three"}
        onClick={setCurrent}
      >
        Начинки
      </Tab>
    </div>
  );
};

const Tabs = (props) => {
  return (
    <div className={IngredientStyles.tabContainer}>
      <div className={IngredientStyles.tabContent}>
        <h2 className="text text_type_main-medium">Булки</h2>
        {<TabsCategory category="bun" data={props.data} />}
      </div>
      <div className={IngredientStyles.tabContent}>
        <h2 className="text text_type_main-medium">Соусы</h2>
        {<TabsCategory category="sauce" data={props.data} />}
      </div>
      <div className={IngredientStyles.tabContent}>
        <h2 className="text text_type_main-medium">Начинки</h2>
        {<TabsCategory category="main" data={props.data} />}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  data: arrayOf(FoodPropTypes).isRequired,
};

const TabsCategory = (props) => {
  const items = props.data.filter(function (category) {
    return category.type === props.category;
  });
  return (
    <div className={IngredientStyles.items}>
      {items.map((item) => (
        <TabsItem key={item._id} item={item} />
      ))}
    </div>
  );
};

TabsCategory.propTypes = {
  data: arrayOf(FoodPropTypes).isRequired,
};

const TabsItem = (props) => {
  const [state, setState] = useState({
    modalOpen: false,
    pickedItem: "",
  });
  
  const modalSwitch = (props) => {
    setState({
      ...state,
      modalOpen: !state.modalOpen,
      pickedItem: props,
    });
  };

  return (
    <>
      <div
        className={IngredientStyles.item}
        onClick={() => modalSwitch(props.item)}
      >
        <div className={IngredientStyles.item_image}>
          <img src={props.item.image} alt={props.item.name} />
        </div>
        <div className={IngredientStyles.item_price}>
          <span className="text text_type_digits-default">
            {props.item.price}
          </span>
          <CurrencyIcon type="primary" />
        </div>
        <h3
          className={`${IngredientStyles.item_title} text text_type_main-default`}
        >
          {props.item.name}
        </h3>
        <Counter
          className={IngredientStyles.counter}
          count={1}
          size="default"
        ></Counter>
      </div>
      {state.pickedItem && (
        <Modal isOpen={state.modalOpen} close={() => modalSwitch(props.item)}>
          <IngredientDetails item={state.pickedItem} />
        </Modal>
      )}
    </>
  );
};