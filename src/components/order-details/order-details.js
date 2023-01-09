import DetailsStyles from "./order-details.module.css";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorContext } from "../../services/api-context";
import { useContext, useEffect} from "react";
import { ORDER_API } from "../../utils/burger-api";
export default function OrderDetails() {
  const {orderFood, setOrderFood} = useContext(ConstructorContext);

  const order = {
    ingredients: orderFood.items.map((item) => item._id),
}

useEffect(() => {
    fetch(ORDER_API,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => {
            if (res.ok) return res.json();
            else return Promise.reject(`Что-то пошло не так: ${res.status}`);
        })
        .then(res => {
            setOrderFood({
                ...orderFood,
                orderNumber: res
            })
        })
        .catch(error => alert(error))
}, [])

  return (
    <>
    {orderFood.orderNumber &&
    <div className={DetailsStyles.checkout}>
      <p className={`${DetailsStyles.number} text text_type_digits-large`}>
        {orderFood.orderNumber.order.number}
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
    }
    </>
  );
}