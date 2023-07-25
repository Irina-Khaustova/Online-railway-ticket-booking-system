import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstClass: '',
  secondClass: '',
  thirdClass: '',
  fourthClass: '',
  wiFi: null,
  express: '',
  price: "",
  startDepartureHourFrom: "",
  startDepartureHourTo: "",
  startArrivalHourFrom: "",
  startArrivalHourTo: "",
  endDepartureHourFrom: "",
  endDepartureHourTo: "",
  endArrivalHourFrom: "",
  endArrivalHourTo: "",
  priceFrom:"",
  priceTo: "",
};

export const sidebarSettingsItemSlice = createSlice({
  name: "sidebarSettingsItem",
  initialState,
   reducers: {
   putValues: (state, action) => {
     const parameter = action.payload.type;
    console.log( parameter + 33)
      state[parameter] = action.payload.meaning;
      console.log(state.firstClass, action.payload.meaning + 636)
         },

  
    putTime: (state, action) => {
      state[action.payload.type] = action.payload.value;
    },
},
});

export const {
  putValues,
  putTime,
//   deleteProductInBasket,
//   changeProductInBaslet,
//   submitForm,
//   changSubmittingFormStatus,
//   showErrorSubmitting,
} = sidebarSettingsItemSlice.actions;
 export const sidebarSettingItem = (state) => state.sidebarSettingsItemSlice;
 export default sidebarSettingsItemSlice.reducer;