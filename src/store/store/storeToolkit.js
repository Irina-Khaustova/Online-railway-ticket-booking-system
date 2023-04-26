import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import trainSelection from '../slices/trainSelection';
import { MyApi } from '../slices/MyApi';

//import saga from '../sagas/indexToolkit';

//const sagaMiddleWare = createSagaMiddleware()
//const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleWare];
export default configureStore({
    reducer: {
      trainSelection: trainSelection,
      [MyApi.reducerPath]: MyApi,
    },
    
  });

//sagaMiddleWare.run(saga);