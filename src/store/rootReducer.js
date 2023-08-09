import { combineReducers } from 'redux';

// import counterReducer from './counter/reducer';
import todoReducer from './todo/reducer';

// COMBINE MANY REDUCERS
const rootReducer = combineReducers({
//   counterReducer,
  todoReducer,
});

export default rootReducer;