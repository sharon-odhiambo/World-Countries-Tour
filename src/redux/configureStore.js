import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import itemReducer from './items/items';
import listReducer from './lists/Lists';

const rootReducer = combineReducers({
  lists: listReducer,
  items: itemReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
