import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trainsToDraw : [],
  counts: 0,
  error: null,
  choiceTrainTo: null,
  choiceTrainfrom: null,
  trainsToDrawFiltered: null,
  sort: 'date',
  sortNumber: 5,
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
   putTrainsFiltered: (state, action) => {
      console.log(action.payload)
      state.trainsToDrawFiltered = action.payload.items;
      state.counts = action.payload.total_count;
      //state.counts = action.paiload.total_count;
    },
    putSort: (state, action) => {
      console.log(action.payload + 222222)
      state.sort = action.payload;
   },
   putSortNumber: (state, action) => {
      state.sortNumber = Number(action.payload);
   },
 },
});

export const {
   putTrains,
   putError,
   putChoiceTrain,
   putTrainsFiltered,
   putSort,
   putSortNumber,
} = trainSelectionSlice.actions;
 export const trainSelection = (state) => state.trainSelectionSlice;
 export default trainSelectionSlice.reducer;
