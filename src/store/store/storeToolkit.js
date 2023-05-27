import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import searchTrainForm from '../slices/searchTrainForm';
import { myApi } from '../slices/MyApi';
import { setupListeners } from '@reduxjs/toolkit/query'

import saga from '../sagas/indexToolkit';

const sagaMiddleWare = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleWare];
export const store = configureStore({
    reducer: {
      searchTrainForm: searchTrainForm,
      [myApi.reducerPath]: myApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware, myApi.middleware),
  });

//sagaMiddleWare.run(saga);

setupListeners(store.dispatch)