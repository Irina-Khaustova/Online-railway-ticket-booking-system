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
  seatsDeparture: [],
  seatsArrival: [],
  coastDeparture: 0,
  coastArrival: 0,
  chooseWagon: null,
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
         putTotalCoast: (state, action) => {
      
          
          const arrNew = [];
    
          let arr1 = state[action.payload.category];
          if(arr1) {
          for(let i=0; i< arr1.length; i +=1) {
            if(arr1[i].wagon !== action.payload.wagon) {
              arrNew.push(arr1[i])
          }
        }
      }
        state[action.payload.category] = arrNew;
         
         
 },
 putTotalCoast1: (state, action) => {
  let arr = action.payload.seats;
  console.log()
  if(arr) {
  for(let i=0; i < arr.length; i+=1) {
    
  state[action.payload.category].push(arr[i]);
  state.chooseWagon = action.payload.chooseWagon;  
  }
}
},
clearSeats: (state) => {
  state.seatsDeparture = []; 
  state.seatsArrival = [];
  },
   
putSumm: (state, action) => {

  let arr3 = [];
  let arr1 = state[action.payload];
  for(let i=0; i< arr1.length; i+=1) {
    arr3.push(arr1[i].price)
  }
  console.log(arr3)
  const arr2 = arr3.reduce((summ, current) => {
    summ += Number(current);
    return summ;
  }, 0)
  console.log(arr2)
    if(action.payload === 'seatsDeparture') {
       state.coastDeparture = arr2;
    } else {
       state.coastArrival = arr2;  
    }
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
   putTotalCoast,
   putTotalCoast1,
   putSumm,
   clearSeats,
//   deleteProductInBasket,
//   changeProductInBaslet,
//   submitForm,
//   changSubmittingFormStatus,
//   showErrorSubmitting,
} = sidebarSettingsItemSlice.actions;
 export const sidebarSettingItem = (state) => state.sidebarSettingsItemSlice;
 export default sidebarSettingsItemSlice.reducer;