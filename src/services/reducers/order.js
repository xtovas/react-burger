import {
    ORDER_FAILED,
    ORDER_REQUEST,
    ORDER_SUCCESS,
    CLEAR_ORDER,
  } from "../actions/order";
  
  const initialState = {
    orderInfo: {},
    orderPopup: false,
    isRequested: false,
    hasFailed: false,
  };
  
  export function orderReducer(state = initialState, action) {
    switch (action.type) {
      case ORDER_REQUEST: {
        return {
          ...state,
          isRequested: true,
        };
      }
      case ORDER_SUCCESS: {
        return {
          ...state,
          isRequested: false,
          hasFailed: false,
          orderPopup: true,
          orderInfo: action.order,
        };
      }
      case ORDER_FAILED: {
        return {
          ...state,
          hasFailed: true,
          isRequested: false,
        };
      }
      case CLEAR_ORDER: {
        return {
          ...state,
          orderInfo: {},
          hasFailed: false,
          orderPopup: false,
        };
      }
      default: {
        return state;
      }
    }
  }
  