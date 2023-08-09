import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  parameters: [],
  price: "",
  startDepartureHourFrom: "",
  endDepartureHourFrom: "",
  startDepartureHourTo: "",
  endDepartureHourTo: "",
  startArrivalHourFrom: "",
  endArrivalHourFrom: "",
  startArrivalHourTo: "",
  endArrivalHourTo: "",
  priceFrom:"",
  priceTo: "",
  trainsToDrawFiltered: null,
};

export const sidebarSettingsItemSlice = createSlice({
  name: "sidebarSettingsItem",
  initialState,
   reducers: {
   putValues: (state, action) => {
     const i = state.parameters.indexOf(action.payload.type);
      if(action.payload.meaning === true) {
        if(i <=0) {
        state.parameters.push(action.payload.type)
        }
      }
      else {
        const i = state.parameters.indexOf(action.payload.type);
        if(i >=0) {
        state.parameters.splice(i,1)
        }
      }
      console.log(state.parameters + 12455665599)
         },

  
    putTime: (state, action) => {
      state[action.payload.type] = action.payload.value;
    },
    putTrainsToDrawFiltered: (state, action) => {
      const trains = action.trainsToDraw; 
      const parameters = [state.have_first_сlass, state.have_second_сlass, state.have_third_сlass, state.have_fourth_сlass, state.have_wifi, state.is_express];
      const params = [];

      let obj = Object.entries(parameters)
      //console.log(parameters)
      for (let i = 0; i < obj.length; i += 1) {
        if (obj[i].includes(true)) {
           params.push(obj[i])
        }
      }
      let paramsChanged = Object.keys(Object.fromEntries(params))

      for(let i=0; i < paramsChanged.length; i+=1) {
        
          trains.filter((el => el[paramsChanged.i]))
        
      }

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