import {
    Logo,
    BurgerIcon,
    ListIcon,
    ProfileIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import HeaderStyles from "./app-header.module.css";

export default function AppHeader () {
    return (
      <header className={HeaderStyles.header}>
        <div className={HeaderStyles.headerContainer}>
            <div className={HeaderStyles.headerNav}>
                <div className={`${HeaderStyles.headerItem} text text_type_main-default`}>
                    <BurgerIcon type="primary"></BurgerIcon>
                    <a className={HeaderStyles.headerLink} href="#">Конструктор</a>
                </div>
                <div className={`${HeaderStyles.headerItem} text text_type_main-default text_color_inactive`}>
                    <ListIcon type="secondary"></ListIcon>
                    <a className={HeaderStyles.headerLink} href="#">Лента заказов</a>
                </div>
            </div>
            <div className={`${HeaderStyles.headerLogo}`}>
                <a className={HeaderStyles.headerLink} href="#"><Logo></Logo></a>
            </div>
            <div className={`${HeaderStyles.headerItem} text text_type_main-default text_color_inactive`}>
                <ProfileIcon type="secondary"></ProfileIcon>
                <a className={HeaderStyles.headerLink} href="#">Личный кабинет</a>
            </div>
        </div>
      </header>
    )
}
