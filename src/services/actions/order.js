import { createOrder } from "../../utils/burger-api";

export const ORDER_REQUEST = "ORDER_REQUEST";
export const ORDER_SUCCESS = "ORDER_SUCCESS";
export const ORDER_FAILED = "ORDER_FAILED";
export const CLEAR_ORDER = "CLEAR_ORDER";

export function sendOrder(body) {
    return function (dispatch) {
      dispatch({ type: ORDER_REQUEST });
        createOrder(body)
        .then((data) => {
          if (data && data.success) {
            dispatch({
              type: ORDER_SUCCESS,
              order: data,
            });
          } else {
            dispatch({ type: ORDER_FAILED });
          }
        })
        .catch(() => {
            dispatch({type: ORDER_FAILED});
            setTimeout(() => {
                dispatch({type: CLEAR_ORDER});
            }, 3000);
    });
    }
  }
