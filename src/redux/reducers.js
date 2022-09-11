import {
  add_toCart,
  decrease_cart_count,
  get_restaurantsList,
  increase_cart_count,
  cart_itemDelete,
  cart_clear,
} from "./actionTypes";
import { configureStore } from "@reduxjs/toolkit";

const getRestaurantsList = (state = null, action) => {
  switch (action.type) {
    case get_restaurantsList:
      return action.restaurant;
    default:
      return state;
  }
};

const addToCart = (state = [], action) => {
  switch (action.type) {
    case add_toCart.type:
      const inCart = state?.find((item) => {
        return item.id === action.list.id ? true : false;
      });

      return inCart
        ? state.map((item) => {
            return item.id === action.list.id
              ? { ...item, count: item.count + 1 }
              : item;
          })
        : [...state, { ...action.list, count: 1 }];

    case increase_cart_count.type:
      return state.map((item, ind) => {
        return item.id === action.id
          ? { ...item, count: item.count + 1 }
          : item;
      });
    case decrease_cart_count.type:
      return state.map((item, ind) => {
        return item.id === action.id
          ? { ...item, count: item.count - 1 }
          : item;
      });
    case cart_itemDelete.type:
      return state.filter((item) => {
        return item.id !== action.id;
      });
    case cart_clear.type:
      return [];
    default:
      return state;
  }
};
export const store = configureStore({
  reducer: { getRestaurantsList, addToCart },
});
