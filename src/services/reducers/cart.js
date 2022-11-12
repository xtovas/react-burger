export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const FILTER = "FILTER";
export const EMPTY_CART = "EMPTY_CART";
export const SET_AMOUNT = "SET_AMOUNT";
const initialState = {
  cart: [],
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    default: {
        return state;
    }
    case ADD_TO_CART: {
      if (action.item.type === "bun") {
        let foodInCart = state.cart.find((item) => item.type === "bun");
        if (foodInCart) {
          const tempBasket = state.cart.filter(
            (i) => i.type !== action.item.type
          );
          return {
            ...state,
            cart: [...tempBasket, { ...action.item, count: 1 }],
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, { ...action.item, count: 1 }],
          };
        }
      }
      else {
        return {
            ...state,
            cart: [ ...state.cart, { ...action.item, count:1 } ]
        }
      } 
    }
    case DELETE_FROM_CART: 
    return {
        ...state,
        cart: state.cart.filter(item => item.uuid !== action.item.uuid)
    }
    case FILTER: {
        let tempBasket = [...state.cart];
        tempBasket[action.index] = tempBasket.splice(
          state.cart.indexOf(action.item),
          1,
          tempBasket[action.index]
        )[0];
        return {
          ...state,
          cart: tempBasket,
        };
        /*falls through*/
      }
    case EMPTY_CART: {
      return {
        ...state,
        cart: [],
      };
    }
  }
}


