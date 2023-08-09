import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trainsToDraw : [],
  counts: 0,
  error: null,
  choiceTrainTo: null,
};

export const trainSelectionSlice = createSlice({
  name: "trainSelection",
  initialState,
   reducers: {
   putTrains: (state, action) => {
        console.log(action.payload)
        state.trainsToDraw = action.payload.items;
        state.counts = action.payload.total_count;
        //state.counts = action.paiload.total_count;
      },
   putError: (state, action) => {
      state.error = action.payload;
   },
   putChoiceTrain: (state, action) => {
      state.choiceTrainTo = action.payload.to;
      state.choiceTrainfrom = action.payload.from;
   }, 
 },
});

export const {
   putTrains,
   putError,
   putChoiceTrain,
//   deleteProductInBasket,
//   changeProductInBaslet,
//   submitForm,
//   changSubmittingFormStatus,
//   showErrorSubmitting,
} = trainSelectionSlice.actions;
 export const trainSelection = (state) => state.trainSelectionSlice;
 export default trainSelectionSlice.reducer;
