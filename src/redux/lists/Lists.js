/* eslint-disable no-underscore-dangle */
import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_COUNTRIES = 'Financial-model-app/lists/GET_COUNTRIES';
const GET_COUNTRYDETAILS = 'Financial-model-app/lists/GET_COUNTRYDETAILS';

export const fetchList = createAsyncThunk(GET_COUNTRIES, async () => {
  const response = await fetch('https://api.teleport.org/api/cities');
  const data = await response.json();

  const newArr = Object.entries(data);
  const mappedArr = Object.entries(newArr[0][1]);
  const secondArr = Object.entries(mappedArr[0][1]);
  const keys = Object.keys(secondArr);

  const list = [];
  keys.map((key) => list.push({
    name: secondArr[key][1].matching_full_name,
    links: secondArr[key][1]._links['city:item'].href,
  }));
  return list;
});

export const countryDetails = createAsyncThunk(GET_COUNTRYDETAILS, async (link) => {
  const response = await fetch(`${link}`);
  const data = await response.json();
  return data;
});

const initialState = [];
const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_COUNTRIES}/fulfilled`:
      return action.payload;
    case `${GET_COUNTRYDETAILS}/fulfilled`:
      return action.payload;
    default: return state;
  }
};

export default listReducer;
