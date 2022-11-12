import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import HeaderStyles from "./app-header.module.css";

export default function AppHeader() {
  return (
    <header className={HeaderStyles.header}>
      <div className={HeaderStyles.headerContainer}>
        <div className={HeaderStyles.headerNav}>
          <div
            className={`${HeaderStyles.headerItem} text text_type_main-default`}
          >
            <a className={HeaderStyles.headerLink} href="#">
              <BurgerIcon type="primary" />
              Конструктор
            </a>
          </div>
          <div
            className={`${HeaderStyles.headerItem} text text_type_main-default text_color_inactive`}
          >
            <a className={HeaderStyles.headerLink} href="#">
              <ListIcon type="secondary" />
              Лента заказов
            </a>
          </div>
        </div>
        <div className={`${HeaderStyles.headerLogo}`}>
          <a className={HeaderStyles.headerLink} href="#">
            <Logo />
          </a>
        </div>
        <div
          className={`${HeaderStyles.headerItem} text text_type_main-default text_color_inactive`}
        >
          <a className={HeaderStyles.headerLink} href="#">
            <ProfileIcon type="secondary" />
            Личный кабинет
          </a>
        </div>
      </div>
    </header>
  );
}
