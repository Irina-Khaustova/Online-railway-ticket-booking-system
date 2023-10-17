import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  passengers: [],
  errorSeats: 'seats-selection-page-item-error-no-active',
};


export const passengersSlice = createSlice({
  name: "passengers",
  initialState,
   reducers: {
   putPassengers: (state, action) => {
   state.passengers = action.payload;
         },
         deletePassenger: (state, action) => {
      console.log(action.payload, state[action.payload.category])
      state[action.payload.category] = action.payload.value;
      console.log(state.test)
    },
    putError: (state, action) => {
      console.log(action.payload)
          state[action.payload.error] = action.payload.class + '-active'  
 },
    clearError: (state, action) => {
      state[action.payload.error] = action.payload.class + '-no-active'  
},
}
});

export const {
  putPassengers,
  deletePassenger,
} = passengersSlice.actions;
 export const passengers = (state) => state.passengersSlice;
 export default passengersSlice.reducer;