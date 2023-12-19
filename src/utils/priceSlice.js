import { createSlice } from "@reduxjs/toolkit";

const priceSlice = createSlice({
    name:"price",
    initialState:{
      totalprice:0,
    },
    reducers:{
      addprice:(state,action)=>{
       
        state.totalprice+=action.payload;
      },
      substractprice:(state,action)=>{
        state.totalprice-=action.payload;
      },
      clearprice:(state)=>{
        state.totalprice=0
      }
    }
  })

export const {addprice,substractprice,clearprice} = priceSlice.actions;


export default priceSlice.reducer
