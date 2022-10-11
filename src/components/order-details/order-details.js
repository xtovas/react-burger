import DetailsStyles from "./order-details.module.css";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export default function OrderDetails() {
  return (
    <div className={DetailsStyles.checkout}>
      <p className={`${DetailsStyles.number} text text_type_digits-large`}>
        034536
      </p>
      <p className={`${DetailsStyles.id} text text_type_main-medium`}>
        идентификатор заказа
      </p>
      <div className={DetailsStyles.ready}>
        <CheckMarkIcon type="primary" />
      </div>
      <p className="text text_type_main-default">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}