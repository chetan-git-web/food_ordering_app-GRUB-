import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    additem: (state, action) => {
      console.log(state.items.length)
      state.items.push(action.payload);
    },
    removeaction: (state, action) => {
      const index=state.items.indexOf(action.payload);
      console.log(state.items[0]);
      console.log(action.payload);
      state.items.splice(index,1);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});



export const { additem, removeaction, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

