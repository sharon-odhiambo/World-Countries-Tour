import React from 'react';
import { useSelector } from 'react-redux';

const CountryItem = () => {
  const countries = useSelector((state) => state);
  return (
    <ul>
      <li>{countries.location}</li>
      <li>{countries.population}</li>
    </ul>
  );
};

export default CountryItem;
