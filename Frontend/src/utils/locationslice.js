import { createSlice } from "@reduxjs/toolkit";

const locationslice = createSlice({
  name: "location",
  initialState: {
    latitude: "",
    longitude: ""
  },
  reducers: {
    addlocation: (state, action) => {
      state.latitude=action.payload[0],
      state.latitude=action.payload[1]
    }
  },
});



export const { addlocation } = locationslice.actions;

export default locationslice.reducer;

