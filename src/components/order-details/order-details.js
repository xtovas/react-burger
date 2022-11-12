import PropTypes from "prop-types";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import DetailStyles from "./order-details.module.css";

function OrderDetails(props) {
  return (
    <div className={DetailStyles.checkout}>
      <p className={`${DetailStyles.number} text text_type_digits-large`}>
        {props.info.order.number}
      </p>
      <p className={`${DetailStyles.id} text text_type_main-medium`}>
        идентификатор заказа
      </p>
      <div className={DetailStyles.ready}>
        <CheckMarkIcon type="primary" />
      </div>
      <p className="text text_type_main-default">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

OrderDetails.propTypes = {
  info: PropTypes.object.isRequired,
};

export default OrderDetails;