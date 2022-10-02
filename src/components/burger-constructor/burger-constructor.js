import { CurrencyIcon, Button, ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import  { FoodPropTypes} from "../../utils/data";
import { arrayOf } from "prop-types";
import ConstructorStyles from "./burger-constructor.module.css";
import React from "react";

export default class BurgerConstructor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: this.props.data.map((item) => item.type !== 'bun' ? <BurgerElement key={item._id} item={item}/> : ''),
            bun: this.props.data.filter(item => item.type === 'bun')
        }
    }
    render() {
        return (
            <div className={ConstructorStyles.orderContainer}>
                {this.state.bun[0] ? <BurgerElement item={this.state.bun[0]} type='top'/> : ''}
                <ul className={ConstructorStyles.orderContent}>
                    {this.state.items}
                </ul>
                {this.state.bun[0] ? <BurgerElement item={this.state.bun[0]} type='bottom'/> : ''}
                <div className={ConstructorStyles.priceContainer}>
                    <p className={ConstructorStyles.price}>
                        <span className="text text_type_digits-medium">610</span>
                        <CurrencyIcon type="primary"></CurrencyIcon>
                    </p>
                    <Button type="primary" size="medium">
                        Оформить заказ
                    </Button>
                </div>
            </div>
        );
    }
}

function BurgerElement(ingredients) {
    return (
        <li className={ConstructorStyles.item}>
             {ingredients.item.type !== 'bun' ? <DragIcon type="primary"></DragIcon> : (<span />)}
            <ConstructorElement type={ingredients.item.type === 'bun' ? ingredients.type : ''}
                isLocked={ingredients.item.type === 'bun'}
                text={ingredients.item.name}
                price={ingredients.item.price}
                thumbnail={ingredients.item.image}
            ></ConstructorElement>
        </li> 
    )
}

BurgerElement.propTypes = {
    item: FoodPropTypes
}

BurgerConstructor.propTypes = {
    data: arrayOf(FoodPropTypes)
}