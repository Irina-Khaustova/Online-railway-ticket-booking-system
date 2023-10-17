import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chooseTrainItem: '',
};

export const chooseTrainItemSlice = createSlice({
  name: "chooseTrainItem",
  initialState,
   reducers: {
   putChooseTrainItem: (state, action) => {
      state.chooseTrainItem = action.payload.el;
      console.log(action.payload.el)
         },

  
    putTest: (state, action) => {
      state.test = action.payload;
      console.log(state.test)
    },
 },
});

export const {
  putChooseTrainItem,
  putTest,
} = chooseTrainItemSlice.actions;
 export const chooseTrainItem = (state) => state.chooseTrainItemSlice;
 export default chooseTrainItemSlice.reducer;