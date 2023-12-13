import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  passengers: [],
  errorSeats: 'seats-selection-page-item-error-no-active',
  numberPassengers: null,
  validSet: [],
  isValid: false,
};

// {'id': i, 'status': false, 
//       'passenger': {
//         "coach_id": "",
//         "person_info": {
//           "is_adult": '',
//           "first_name": "",
//           "last_name": "",
//           "patronymic": "",
//           "gender": null,
//           "birthday": "",
//           "document_type": "",
//           "document_data": ""
//         },
//         "seat_number": null,
//         "is_child": null,
//         "include_children_seat": null
//       }
    
//     }

export const passengersSlice = createSlice({
  name: "passengers",
  initialState,
   reducers: {
    putNumbers: (state, action) => {
        console.log(25, action.payload)
        state.numberPassengers = action.payload.passengers;
        state.validSet = action.payload.arrValid
        state.isValid = false
              },
   changePassenger: (state, action) => {
     const arr = state.validSet;
     console.log(arr)
     for(let i=0; i < arr.length; i+=1) {
        if(arr[i].id === action.payload.id) {
            state.validSet[i].passenger = action.payload.passenger
        }
   //state.validSet =arr;
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
    
},
  putisValid: (state, action) => {
    
    
    const arr2 =state.validSet;
    if(arr2.length > 0) {state.isValid = true}
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
    console.log(action.payload)
      state.user = action.payload.user;
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
  changePassenger,
  deletePassenger,
  putUser,
  putNumbers,
  putValid,
  putisValid
} = passengersSlice.actions;
 export const passengers = (state) => state.passengersSlice;
 export default passengersSlice.reducer;