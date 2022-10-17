import AppHeader from "../app-header/app-header";
import AppStyle from "./app.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { useState, useEffect } from "react";
import { getIngredients, sendOrder } from "../../utils/constants";
import { NORMA_API } from "../../utils/constants";
export default function App() {
  const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    data: []
  });
  useEffect(() => {
    const getData = async () => {
      setState({ ...state, isLoading: true, hasError: false });
      try {
        const res = await fetch(`${NORMA_API}/ingredients`);
        if(!res.ok) return Promise.reject(`Что-то пошло не так: ${res.status}`);

        const resData = await res.json();
        setState((prevState) => ({ ...prevState, data: resData.data, isLoading: false }));

      } catch {
        setState((prevState) => ({ ...prevState, loading: false,  hasError: true }));
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