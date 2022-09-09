import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import listReducer from './lists/Lists';

const rootReducer = combineReducers({
  lists: listReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
