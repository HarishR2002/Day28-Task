// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  selectedItem: null, // To store the currently selected item
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      } else {
        state.items.push({
          ...item,
          totalPrice: item.price * item.quantity,
        });
      }
      state.totalQuantity += item.quantity;
      state.totalAmount += item.price * item.quantity;
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const itemToRemove = state.items.find(item => item.id === id);
      if (itemToRemove) {
        state.totalQuantity -= itemToRemove.quantity;
        state.totalAmount -= itemToRemove.totalPrice;
        state.items = state.items.filter(item => item.id !== id);
      }
    },
    selectItem: (state, action) => {
      const id = action.payload;
      state.selectedItem = state.items.find(item => item.id === id) || null;
    },
  },
});

export const { addItem, removeItem, selectItem } = cartSlice.actions;
export default cartSlice.reducer;
