import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { useEffect } from "react";
import AppStyle from "./app.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from "../../services/actions/api-reducer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const dispatch = useDispatch();
  const menu = useSelector((state) => {
    return state.menu;
  });

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <div className={AppStyle.appBody}>
      <AppHeader />
      {!menu.items.success && !menu.loadingFailed && (
        <div className={`${AppStyle.loading} text text_type_main-medium`}>
          Загрузка ...
        </div>
      )}
      {menu.loadingFailed && (
        <div className={`${AppStyle.loading} text text_type_main-medium`}>
          Ошибка.
        </div>
      )}
      <main className={AppStyle.container}>
        {menu.items.success && (
          <div className={AppStyle.blocks}>
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients />
              <BurgerConstructor />
            </DndProvider>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;