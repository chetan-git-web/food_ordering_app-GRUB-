import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    additem: (state, action) => {
      state.items.push(action.payload);
    },
    removeaction: (state, action) => {
      const index=state.items.indexOf(action);
      state.items.splice(index,1);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});



export const { additem, removeaction, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

