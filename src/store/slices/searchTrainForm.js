import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pointOfDeparture : '',
  destination: '',
  datePointOfDeparture : '',
  dateDestination: '',
  test: null,
  trainSelection: '',
};

export const searchTrainFormSlice = createSlice({
  name: "searchTrainForm",
  initialState,
   reducers: {
   putSearchFormValues: (state, action) => {
    const newState = action.payload
    console.log(newState.datePointOfDeparture + 33)
      state.pointOfDeparture = newState.pointOfDeparture;
      state.destination = newState.destination;
      state.datePointOfDeparture = newState.datePointOfDeparture;
      state.dateDestination = newState.dateDestination;
      state.trainSelection = newState.trainSelection;
         },

  
    putTest: (state, action) => {
      state.test = action.payload;
      console.log(state.test)
    },

//     submitForm: (state, action) => {
//       state.submittingFormStatus = true;
//       state.productsInBasket = [];
//       window.localStorage.setItem("productsInBasket", JSON.stringify([]));
//     },

//     changSubmittingFormStatus: (state, action) => {
//       state.submittingFormStatus = false;
//     },

//     showErrorSubmitting: (state, action) => {
//       state.errorSubmiting = action.payload;
//     },
 },
});

export const {
  putSearchFormValues,
  putTest,
//   deleteProductInBasket,
//   changeProductInBaslet,
//   submitForm,
//   changSubmittingFormStatus,
//   showErrorSubmitting,
} = searchTrainFormSlice.actions;
 export const searchTrainForm = (state) => state.searchTrainFormSlice;
 export default searchTrainFormSlice.reducer;
