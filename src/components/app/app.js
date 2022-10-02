import AppHeader from "../app-header/app-header";
import AppStyle from "./app.module.css";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import { data } from "../../utils/data";
import BurgerConstructor from "../burger-constructor/burger-constructor";
export default function App() {
    return (
        <div className={AppStyle.appBody}>
            <AppHeader></AppHeader>
            <main className={AppStyle.container}>
                <BurgerIngredients data={data}></BurgerIngredients>
                <BurgerConstructor data={data}></BurgerConstructor>
            </main>
        </div>
    )
}