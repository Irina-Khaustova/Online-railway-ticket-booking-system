import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import saga from '../sagas/indexToolkit';

const sagaMiddleWare = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleWare];
export default configureStore({
    reducer: {
      
    },
    middleware
  });

sagaMiddleWare.run(saga);