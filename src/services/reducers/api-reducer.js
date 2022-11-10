import {
    CHANGE_TAB,
    GET_INGREDIENTS_FAILED,
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
  } from "../actions/api-reducer";
  
  const initialState = {
    items: {
      data: [null],
      success: false,
    },
    itemsRequest: true,
    loadingFailed: false,
    currentTab: "1",
  };
  
  export function apiReducer(state = initialState, action) {
    switch (action.type) {
      default: {
        return state;
      }
      case GET_INGREDIENTS_REQUEST: {
        return {
          ...state,
          itemsRequest: true,
        };
      }
      case GET_INGREDIENTS_SUCCESS: {
        return {
          ...state,
          itemsRequest: false,
          loadingFailed: false,
          items: action.items,
        };
      }
      case GET_INGREDIENTS_FAILED: {
        return {
          ...state,
          loadingFailed: true,
          itemsRequest: false,
        };
      }
      case CHANGE_TAB: {
        return {
          ...state,
          currentTab: action.currentTab,
        };
      }
    }
  }