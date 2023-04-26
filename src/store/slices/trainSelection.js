import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countPlaces : null,
  sortElement: null,
  cities: [],
};

export const trainSelectionSlice = createSlice({
  name: "trainSelection",
  initialState,
   reducers: {
   putCities: (state, action) => {
    
        state.cities = action.payload;
      }
      
//       state.productsInBasket.push(action.payload);
//       window.localStorage.setItem(
//         "productsInBasket",
//         JSON.stringify(state.productsInBasket)
//       );
//     },

//     deleteProductInBasket: (state, action) => {
//       state.productsInBasket = state.productsInBasket.filter(
//         (el) => el.product.id + el.size !== action.payload
//       );
//       window.localStorage.setItem(
//         "productsInBasket",
//         JSON.stringify(state.productsInBasket)
//       );
//     },
//     changeProductInBaslet: (state, action) => {
//       state.productsInBasket[action.payload.index].quantity +=
//         action.payload.quantity;
//       window.localStorage.setItem(
//         "productsInBasket",
//         JSON.stringify(state.productsInBasket)
//       );
//     },

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
   putCities,
//   deleteProductInBasket,
//   changeProductInBaslet,
//   submitForm,
//   changSubmittingFormStatus,
//   showErrorSubmitting,
} = trainSelectionSlice.actions;
 export const trainSelection = (state) => state.trainSelectionSlice;
 export default trainSelectionSlice.reducer;
