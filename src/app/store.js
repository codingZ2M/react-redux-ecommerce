import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/shoppingcart/cart'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
