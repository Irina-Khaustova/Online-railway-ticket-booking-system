import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstClass: '',
  secondClass: '',
  thirdClass: '',
  fourthClass: '',
  wiFi: null,
  express: '',
  price: "",
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

  
    putTest: (state, action) => {
      state.test = action.payload;
      console.log(state.test)
    },
},
});

export const {
  putValues,
//   deleteProductInBasket,
//   changeProductInBaslet,
//   submitForm,
//   changSubmittingFormStatus,
//   showErrorSubmitting,
} = sidebarSettingsItemSlice.actions;
 export const sidebarSettingItem = (state) => state.sidebarSettingsItem;
 export default sidebarSettingsItemSlice.reducer;