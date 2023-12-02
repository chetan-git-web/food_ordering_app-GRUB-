import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cardslice"
import priceSlice from "./priceSlice";
import restroslice from "./restroslice";
import locationslice from "./locationslice";



const store= configureStore({
    reducer:{
        cart:cartSlice, 
        price:priceSlice,
        restro:restroslice,
        location:locationslice
    }
}); 

export default store
