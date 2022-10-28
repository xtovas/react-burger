import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
 import { FoodPropTypes } from "../../utils/data";
 import Modal from "../modal/modal";
 import OrderDetails from "../order-details/order-details";
 import {
   ConstructorElement,
   DragIcon,
   Button,
   CurrencyIcon,
 } from "@ya.praktikum/react-developer-burger-ui-components";
 import ConstructorStyles from "./burger-constructor.module.css";
import { ConstructorContext } from "../../services/api-context";


 const BurgerConstructor = () => {
  const {orderFood, setOrderFood} = useContext(ConstructorContext);

   const [state, setState] = useState({
     items: orderFood.items.map((item) =>
       item.type !== "bun" ? <BurgerElement key={item._id} item={item} /> : ""
     ),
     bun: orderFood.items.filter((item) => item.type === "bun"),
     modalOpen: false
   });

   useEffect(() => {
    let total = 0;
    orderFood.items.forEach((item) => {
      total += +item.price;
    });
    setOrderFood({
      ...orderFood,
      totalPrice: total
    })
   }, [setOrderFood]);
  
   const modalSwitch = () => {
     setState({
       ...state,
       modalOpen: !state.modalOpen,
     });
   };

   return (
     <div className={ConstructorStyles.orderContainer}>
       {state.bun[0] ? <BurgerElement item={state.bun[0]} type="top" /> : ""}
       <ul className={ConstructorStyles.orderContent}>{state.items}</ul>
       {state.bun[0] ? <BurgerElement item={state.bun[0]} type="bottom" /> : ""}

       <div className={ConstructorStyles.priceContainer}>
         <p className={ConstructorStyles.price}>
           <span className="text text_type_digits-medium">{orderFood.totalPrice}</span>
           <CurrencyIcon type="primary" />
         </p>
         <Button type="primary" size="medium" onClick={modalSwitch}>
           Оформить заказ
         </Button>
       </div>
       {state.modalOpen && (
       <Modal close={modalSwitch}>
        <ConstructorContext.Provider value={{ orderFood, setOrderFood }}>
         <OrderDetails />
         </ConstructorContext.Provider>
       </Modal>
       )}
     </div>
   );
 };

 export default BurgerConstructor;

function BurgerElement(props) {
   return (
     <li className={ConstructorStyles.item}>
       {props.item.type !== "bun" ? (
         <DragIcon type="primary"></DragIcon>
       ) : (
         <span></span>
       )}
       <ConstructorElement
         type={props.item.type === "bun" ? props.type : ""}
         isLocked={props.item.type === "bun"}
         text={props.item.name+ (props.type === 'top' ? '\n(верх)' : '') + (props.type === 'bottom' ? '\n(низ)' : '')}
         price={props.item.price}
         thumbnail={props.item.image}
       ></ConstructorElement>
     </li>
   );
 }
 BurgerElement.propTypes = {
  item: FoodPropTypes.isRequired,
  type: PropTypes.oneOf(["bun", "top", "bottom"])
};

/* BurgerConstructor.propTypes = {
   data: PropTypes.arrayOf(FoodPropTypes.isRequired).isRequired,
 };*/