import React from 'react';
import { useSelector } from 'react-redux';

const CountryItem = () => {
  const countries = useSelector((state) => state.lists);
  return (
    <ul>
      <li key={countries.geoname_id}>{countries.name}</li>
      <li key={countries.population}>{countries.population}</li>
      <li key={countries.id}>
        {countries.location.latlon.latitude}
        {countries.location.latlon.longitude}
      </li>
    </ul>
  );
};

export default CountryItem;
