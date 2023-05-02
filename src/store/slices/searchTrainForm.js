import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pointOfDepartur : null,
  destination: null,
  datePointOfDeparture : '',
  dateDestination: '',
  test: null,
};

export const searchTrainFormSlice = createSlice({
  name: "searchTrainForm",
  initialState,
   reducers: {
   putSearchFormValues: (state, action) => {
    const newState = action.payload
    console.log(newState.datePointOfDepartur + 33)
      state.pointOfDepartur = newState.pointOfDepartur;
      state.destination = newState.destination;
      state.datePointOfDeparture = newState.datePointOfDeparture;
      state.dateDestination = newState.dateDestination;
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
