import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';

const CountryItem = () => {
  const items = JSON.parse(localStorage.getItem('country'));
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
          <li key={items.location} className="location">
            Country Location:
            <span>
              {items.location[0]}
              &#176; S
            </span>
            <span>
              {items.location[1]}
              &#176; E
            </span>
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
          <li key={items.border} className="borders">
            Borders:
            <span>
              {items.border[0]}
            </span>
            <span>
              {items.border[1]}
            </span>
            <span>
              {items.border[2]}
            </span>
            <span>
              {items.border[3]}
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CountryItem;
