import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_COUNTRIES = 'Financial-model-app/lists/GET_COUNTRIES';

export const fetchList = createAsyncThunk(GET_COUNTRIES, async () => {
  const response = await fetch('https://restcountries.com/v2/all');
  const newData = await response.json();

  const data = newData.slice(0, 120);
  const keys = Object.keys(data);
  const list = [];
  keys.map((key) => list.push({
    id: data[key].alpha2Code,
    population: data[key].population,
    flag: data[key].flags.png,
    name: data[key].name,
    languages: data[key].languages,
    region: data[key].region,
    subregion: data[key].subregion,
    location: data[key].latlng,
    border: data[key].borders,
  }));
  return list;
});

export const initialState = [];
const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_COUNTRIES}/fulfilled`:
      return action.payload;
    default: return state;
  }
};

export default listReducer;
