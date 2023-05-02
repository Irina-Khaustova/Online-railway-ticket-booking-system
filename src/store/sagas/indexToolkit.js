 import { take, put, spawn, call } from "redux-saga/effects";
import trainSelection from "../slices/trainSelection";
import { getCities } from "../actions/actions";
import { useGetCitiesQuery } from "../slices/MyApi";

 
  //watcher
function* submittingFormSaga() {
    console.log(1);
    while (true) {
      const action = yield take(getCities);
      console.log(10);
      yield call(handleSubmittingFormSaga, action);
    }
  }
  
  //worker
  
  function* handleSubmittingFormSaga(action) {
    console.log(3, action.payload);
    
  }

  export default function* saga() {
    yield spawn(submittingFormSaga);
 }
 