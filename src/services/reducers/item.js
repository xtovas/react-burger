import { initialState } from "../item-state";
export const OPEN_ITEM = "OPEN_ITEM";
export const CLOSE_ITEM = "CLOSE_ITEM";

export function itemReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_ITEM: {
      return {
        ...state,
        showItem: action.item,
        showModalPopup: true,
      };
    }
    case CLOSE_ITEM: {
      return {
        ...state,
        showItem: initialState.showItem,
        showModalPopup: false,
      };
    }
    default: {
      return state;
    }
  }
}