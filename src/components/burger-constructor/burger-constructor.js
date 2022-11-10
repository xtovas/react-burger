import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorStyles from "./burger-constructor.module.css";
import { useDispatch, useSelector } from "react-redux";
import { sendOrder, CLEAR_ORDER } from "../../services/actions/order";
import {
  ADD_TO_CART,
  EMPTY_CART,
  DELETE_FROM_CART,
} from "../../services/reducers/cart";
import { useDrop } from "react-dnd";
import { BurgerElement } from "./burger-element/burger-element";

function BurgerConstructor() {
  const dispatch = useDispatch();

  const cart = useSelector(function (state) {
    return state.cart;
  });
  const order = useSelector(function (state) {
    return state.order;
  });
  const orderItems = cart.cart;

  const items = orderItems.map(function (item, index) {
    return item.type !== "bun" ? (
      <BurgerElement
        key={item._id}
        item={item}
        index={index}
        deleteItem={() => dispatch({ type: DELETE_FROM_CART, item })}
      />
    ) : (
      ""
    );
  });
  const bun = orderItems.find((item) => {
    return item.type === "bun";
  });
  const initialValue = 0;
  const burgerCost = orderItems.reduce(function (acc, currentCost) {
    if (currentCost.type === "bun") return acc + currentCost.price * 2;
    else return acc + currentCost.price * currentCost.count;
  }, initialValue);

  const [{ active }, drop] = useDrop({
    accept: "items",
    collect: (monitor) => ({
      active: monitor.isOver(),
    }),
    drop(item) {
      dispatch({
        type: ADD_TO_CART,
        item,
      });
    },
  });

  function submitOrder() {
    const ingredients = [];
    orderItems.forEach(function (item) {
      for (let amount = 0; amount < item.count; amount++) {
        ingredients.push(item._id);
        if (item.type === "bun") ingredients.push(item._id);
      }
    });
    const body = { ingredients: ingredients };
    dispatch({
      type: EMPTY_CART,
    });
    dispatch(sendOrder(body));
  }
  return (
    <section className={ConstructorStyles.section}>
      <div
        className={`${ConstructorStyles.orderContainer} ${
          active ? ConstructorStyles.active : ""
        }`}
        ref={drop}
      >
        {bun ? <BurgerElement item={bun} type="top" /> : ""}
        <ul className={ConstructorStyles.orderContent}>{items}</ul>
        {bun ? <BurgerElement item={bun} type="bottom" /> : ""}
      </div>
      <div className={ConstructorStyles.priceContainer}>
        <p className={ConstructorStyles.price}>
          <span className="text text_type_digits-medium">{burgerCost}</span>
          <CurrencyIcon type="primary" />
        </p>
        {!order.isRequested && !order.hasFailed && (
          <Button
            type="primary"
            size="medium"
            onClick={submitOrder}
            disabled={!cart.cart.length && "disabled"}
          >
            Оформить заказ
          </Button>
        )}
      </div>
      <Modal
        isOpen={order.orderPopup}
        close={() => dispatch({ type: CLEAR_ORDER })}
      >
        <OrderDetails info={order.orderInfo} />
      </Modal>
    </section>
  );
}

export default BurgerConstructor;