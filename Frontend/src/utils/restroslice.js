import { createSlice } from "@reduxjs/toolkit";

const restroslice = createSlice({
    name: "restro",
    initialState:{
        value:"",
    },
    reducers:{
        add:(state,action)=>{
            state.value=action.payload
        },
        remove:(state)=>{
            state.value=""
        }
    }

})
export const {add,remove} = restroslice.actions;


export default restroslice.reducer;




