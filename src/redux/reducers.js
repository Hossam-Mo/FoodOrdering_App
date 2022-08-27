import { get_restaurantsList } from "./actionTypes";
import { configureStore } from "@reduxjs/toolkit";

const getRestaurantsList = (state = null, action) => {
  switch (action.type) {
    case get_restaurantsList:
      return action.restaurant;
    default:
      return state;
  }
};

export const store = configureStore({ reducer: { getRestaurantsList } });
