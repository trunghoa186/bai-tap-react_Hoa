import { createStore, compose , applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';


import rootReducer from './rootReducer';
import rootSaga from './rootSagas'

const sagaMiddleware = createSagaMiddleware();

// REDUX STORE
const store = createStore(
  rootReducer,

  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;