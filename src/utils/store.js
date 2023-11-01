import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cardslice"
import priceSlice from "./priceSlice";
// this is reducer

const store= configureStore({
    reducer:{
        cart:cartSlice, 
        price:priceSlice
    }
}); 

export default store
