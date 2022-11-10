import { CHANGE_TAB } from "../../../services/actions/api-reducer";
import { useRef } from "react";
import Modal from "../../modal/modal";
import { useDispatch } from "react-redux";
import TabStyles from "./tabs.module.css";
import IngredientDetails from "../../ingredient-details/ingredient-details";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { CLOSE_ITEM } from "../../../services/reducers/item";
import { useSelector } from "react-redux";
import { TabsCategory } from "../burger-ingredients";
export function Tabs() {
  const dispatch = useDispatch();
  const menu = useSelector(function (state) {
    return state.menu;
  });
  const click = useSelector(function (state) {
    return state.item;
  });
  const current = menu.currentTab;

  const MenuNav = (props) => {
    const scroll = Navigation.current.offsetTop + Navigation.current.scrollTop;
    const place = [
      tabsBun.current.offsetTop,
      tabsSauce.current.offsetTop,
      tabsStuffing.current.offsetTop,
    ];
    if (props.selected) {
      Navigation.current.scrollTop =
        place[props.selected] - Navigation.current.offsetTop;
    } else {
      if (scroll < place[1]) {
        dispatch({
          type: CHANGE_TAB,
          currentTab: "1",
        });
      } else {
        dispatch({
          type: CHANGE_TAB,
          currentTab: "2",
        });
      }
      if (scroll < place[2]) {
        dispatch({
          type: CHANGE_TAB,
          currentTab: "2",
        });
      } else {
        dispatch({
          type: CHANGE_TAB,
          currentTab: "3",
        });
      }
    }
  };

  const Navigation = useRef([]);
  const tabsBun = useRef([]);
  const tabsSauce = useRef([]);
  const tabsStuffing = useRef([]);

  return (
    <>
      <div className={TabStyles.tabs}>
        <Tab
          className={TabStyles.tabName}
          value="1"
          active={current === "1"}
          onClick={() => MenuNav({ selected: "0" })}
        >
          Булки
        </Tab>
        <Tab
          className={TabStyles.tabName}
          value="2"
          active={current === "2"}
          onClick={() => MenuNav({ selected: "1" })}
        >
          Соусы
        </Tab>
        <Tab
          className={TabStyles.tabName}
          value="3"
          active={current === "3"}
          onClick={() => MenuNav({ selected: "2" })}
        >
          Начинки
        </Tab>
      </div>
      <div
        className={TabStyles.tabContainer}
        ref={Navigation}
        onScroll={MenuNav}
      >
        <div className={TabStyles.tabContent} data-val="bun" ref={tabsBun}>
          <h2 className="text text_type_main-medium">Булки</h2>
          {<TabsCategory category="bun" />}
        </div>
        <div className={TabStyles.tabContent} data-val="sauce" ref={tabsSauce}>
          <h2 className="text text_type_main-medium">Соусы</h2>
          {<TabsCategory category="sauce" />}
        </div>
        <div
          className={TabStyles.tabContent}
          data-val="main"
          ref={tabsStuffing}
        >
          <h2 className="text text_type_main-medium">Начинки</h2>
          {<TabsCategory category="main" />}
        </div>
      </div>
      <Modal
        isOpen={click.showModalPopup}
        close={() => dispatch({ type: CLOSE_ITEM })}
      >
        <IngredientDetails item={click.showItem} />
      </Modal>
    </>
  );
}