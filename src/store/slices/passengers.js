import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  passengers: [],
  errorSeats: 'seats-selection-page-item-error-no-active',
  numberPassengers: null,
  validSet: [],
  isValid: false,
};


export const passengersSlice = createSlice({
  name: "passengers",
  initialState,
   reducers: {
    putNumbers: (state, action) => {
        console.log(25, action.payload)
        state.numberPassengers = action.payload.passengers;
        state.validSet = action.payload.arrValid

              },
   putPassengers: (state, action) => {
   state.passengers = action.payload.passengers;
   const arr = [];
   for(let i=1; i < action.payload; i+=1) {
    arr.push({})
   }
   },
   putValid: (state, action) => {
    console.log(action.payload + 666666)
    const arr = state.validSet;
    
    for(let i=0; i < arr.length; i+=1) {
        if(arr[i].id === action.payload.id) {
            arr[i].status = action.payload.status;
        } 
    }
    state.validSet = arr; 
},
  putisValid: (state, action) => {
    
    state.isValid = true
    const arr2 =state.validSet;
    console.log(arr2)
      arr2.forEach((el) => {
        if(el.status === false) {
            console.log(111)
            state.isValid = false;
        }
      }) 
      
        // for(let i=0; i < state.validSet.length; i+=1) {   
        // if(state.validSet[i].status === false) {
        //     state.isValid = false;
        // }
    
 },
   
   putUser: (state, action) => {
      state.user = action.payload;
   },
   deletePassenger: (state, action) => {
      console.log(action.payload, state[action.payload.category])
      state[action.payload.category] = action.payload.value;
      console.log(state.test)
    },
    putError: (state, action) => {
      console.log(action.payload)
          state[action.payload.error] = action.payload.class + '-active'  
 },
    clearError: (state, action) => {
      state[action.payload.error] = action.payload.class + '-no-active'  
},
}
});

export const {
  putPassengers,
  deletePassenger,
  putUser,
  putNumbers,
  putValid,
  putisValid
} = passengersSlice.actions;
 export const passengers = (state) => state.passengersSlice;
 export default passengersSlice.reducer;