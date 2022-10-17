import AppHeader from "../app-header/app-header";
import AppStyle from "./app.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { useState, useEffect } from "react";
import { getIngredients } from "../../utils/burger-api";

export default function App() {
  const [state, setState] = useState({
    isLoading: true,
    hasError: false,
    data: null
  });
  useEffect(() => {
    const getData = async () => {
      setState((prevState) => ({ ...prevState, isLoading: true }));
  
      try {
        const res = await getIngredients();
  
        setState({ data: res.data, isLoading: false, hasError: false });
      } catch {
        setState((prevState) => ({ ...prevState, isLoading: false, hasError: true }));
      }
    };
  
    getData();
  }, []);


  const { data } = state;

  return (
    <div className={AppStyle.appBody}>
      <AppHeader />
      {state.isLoading || state.hasError ? (
        <div className={AppStyle.loading}>
          <p className="text text_type_main-large text_color_inactive">
            Загрузка<span className={AppStyle.dotFlashing}></span>
          </p>
        </div>
      ) : (
        <>
          <main className={AppStyle.container}>
            <BurgerIngredients data={data} />
            <BurgerConstructor data={data} />
          </main>
        </>
      )}
    </div>
  );
}