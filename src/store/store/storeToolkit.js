import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import searchTrainForm from '../slices/searchTrainForm';
import { MyApi } from '../slices/MyApi';
import { setupListeners } from '@reduxjs/toolkit/query'

import saga from '../sagas/indexToolkit';

const sagaMiddleWare = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleWare];
export const store = configureStore({
    reducer: {
      searchTrainForm: searchTrainForm,
      [MyApi.reducerPath]: MyApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware, MyApi.middleware),
  });

//sagaMiddleWare.run(saga);

setupListeners(store.dispatch)