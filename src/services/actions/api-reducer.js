import { loadIngredients } from "../../utils/burger-api";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";
export const CHANGE_TAB = "CHANGE_TAB";

export function fetchIngredients() {
  return (dispatch) => {
    dispatch({ type: GET_INGREDIENTS_REQUEST });
    loadIngredients()
      .then(function (data) {
        dispatch({ type: GET_INGREDIENTS_SUCCESS, items: data });
      })
      .catch(() => {
        dispatch({ type: GET_INGREDIENTS_FAILED });
      });
  };
}
