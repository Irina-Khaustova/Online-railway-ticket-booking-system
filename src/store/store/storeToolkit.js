import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import searchTrainForm from '../slices/searchTrainForm';
import sidebarSettingsItem from '../slices/sidebarSettingsItem';
import { myApi } from '../slices/MyApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import  passengers  from '../slices/passengers';

import trainSelection from '../slices/trainSelection';
import chooseTrainItem from '../slices/chooseTrainItem';
import seatsSelection from '../slices/seatsSelection';

const sagaMiddleWare = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleWare];
export const store = configureStore({
    reducer: {
      trainSelection: trainSelection,
      searchTrainForm: searchTrainForm,
      sidebarSettingsItem: sidebarSettingsItem,
      chooseTrainItem: chooseTrainItem,
      seatsSelection: seatsSelection,
      passengers: passengers,
      [myApi.reducerPath]: myApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware, myApi.middleware),
  });

//sagaMiddleWare.run(saga);

setupListeners(store.dispatch)