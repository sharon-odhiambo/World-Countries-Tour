import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_COUNTRYDETAILS = 'Financial-model-app/lists/GET_COUNTRYDETAILS';

export const countryDetails = createAsyncThunk(GET_COUNTRYDETAILS,
  async (id) => {
    const response = await fetch(`https://restcountries.com/v2/alpha/${id}`);
    const data = await response.json();
    return data;
  });

const initialState = [];
const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_COUNTRYDETAILS}/fulfilled`:
      return action.payload;
    default: return state;
  }
};

export default itemReducer;
