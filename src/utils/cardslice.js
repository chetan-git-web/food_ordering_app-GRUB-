import { createSlice } from "@reduxjs/toolkit";

const indexofrestro=(a,b)=>{
  for(i=0;i<a.length;i++){
    if(a[i].name==b.name){
      return i;
    }
    
  }
  return -1;
}
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
      const index=indexofrestro(state.items,action.payload);
     
      state.items.splice(index,1);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});



export const { additem, removeaction, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

