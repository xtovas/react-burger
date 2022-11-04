import MenuStyles from "../tabs/burger-ingredients_tabs.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
export const MenuNav = () => {
    const [current, setCurrent] = React.useState("one");
    return (
      <div className={MenuStyles.tabs}>
        <Tab
          className={MenuStyles.tabName}
          value="one"
          active={current === "one"}
          onClick={setCurrent}
        >
          Булки
        </Tab>
        <Tab
          className={MenuStyles.tabName}
          value="two"
          active={current === "two"}
          onClick={setCurrent}
        >
          Соусы
        </Tab>
        <Tab
          className={MenuStyles.tabName}
          value="three"
          active={current === "three"}
          onClick={setCurrent}
        >
          Начинки
        </Tab>
      </div>
    );
  };