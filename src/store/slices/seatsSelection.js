import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chooseTrainItem: '',
  adultsDeparture: 0, 
  childrenWithSeatDeparture: 0, 
  childrenWithoutSeatDeparture: 0,
  adultsArrival: 0, 
  childrenWithSeatArrival: 0, 
  childrenWithoutSeatArrival: 0,
  totalCoastDeparture: 0,
  totalCoastArrival: 0,
  seatsDeparture: [],
  seatsArrival: [],
  errorSeats: 'seats-selection-page-item-error-no-active',
};

//{category: category, seats: seatPlace}
//{wagon: item.coach.class_type, item: evt.target.id, price: priceSeat1}

export const seatsSelectionSlice = createSlice({
  name: "seatsSelection",
  initialState,
   reducers: {
   putChooseSeat: (state, action) => {
      state.chooseTrainItem = action.payload.el;
      console.log(action.payload.el)
         },
    putNumberPassengers: (state, action) => {
      console.log(action.payload, state[action.payload.category])
      state[action.payload.category] = action.payload.value;
      console.log(state.test)
    },
    putError: (state, action) => {
          state[action.payload.error] = action.payload.class + '-active'  
 },
    clearError: (state, action) => {
      state[action.payload.error] = action.payload.class + '-no-active'  
},
}
});

export const {
  putChooseSeat,
  putTest,
  putNumberPassengers,
  putError,
  clearError
} = seatsSelectionSlice.actions;
 export const seatsSelection = (state) => state.seatsSelectionSlice;
 export default seatsSelectionSlice.reducer;