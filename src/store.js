import { createStore, combineReducers } from 'redux';
import { Reducer } from './reducer';

const rootReducer = combineReducers({
  reducer: Reducer,
});
export const store = createStore(rootReducer);
