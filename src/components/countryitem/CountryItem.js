import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';
import './CountryItem.css';

const CountryItem = () => {
  const items = useSelector((state) => state.items);

  return (
    <>
      <NavLink className="arrow" to="/"><BsArrowLeftCircle /></NavLink>
      <div className="country-item">
        <div
          key={items.name}
          className="item-flag"
          style={{ backgroundImage: `url(${items.flag})` }}
        />
        <ul className="countrydetails">
          <h1>Country Details</h1>
          <li key={items.name}>
            Country Name:
            {' '}
            {items.name}
          </li>
          <li key={items.population}>
            Latest Population:
            {' '}
            {items.population}
          </li>
          <li key={items.latlng}>
            Country Location:
            {' '}
            {items.latlng}
          </li>
          <li key={items.region}>
            Region:
            {' '}
            {items.region}
          </li>
          <li key={items.subregion}>
            Subregion:
            {' '}
            {items.subregion}
          </li>
          <li key={items.timezones}>
            Timezone:
            {' '}
            {items.timezones}
          </li>
        </ul>
      </div>
    </>
  );
};

export default CountryItem;
