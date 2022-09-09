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
          className="item-flag"
          style={{ backgroundImage: `url(${items.flag})` }}
        />
        <ul className="countrydetails">
          <h1>Country Details</h1>
          <li>
            Country Name:
            {' '}
            {items.name}
          </li>
          <li>
            Latest Population:
            {' '}
            {items.population}
          </li>
          <li className="location">
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
          <li>
            Region:
            {' '}
            {items.region}
          </li>
          <li>
            Subregion:
            {' '}
            {items.subregion}
          </li>
        </ul>
      </div>
    </>
  );
};

export default CountryItem;
