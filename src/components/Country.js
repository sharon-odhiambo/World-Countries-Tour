import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Route, Routes, NavLink,
} from 'react-router-dom';
import CountryItem from './CountryItem';
import { fetchList, countryDetails } from '../redux/lists/Lists';

const Country = () => {
  const countries = useSelector((state) => state.lists);
  const dispatch = useDispatch();

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(fetchList());
    }
  }, [dispatch]);

  const onClickHandler = (e) => {
    dispatch(countryDetails(e.target.id));
  };

  return (
    <>
      <ul>
        {countries.map((country) => (
          <li key={country.name}>
            {country.name}
            <NavLink
              key={country.links}
              id={country.links}
              onClick={onClickHandler}
              to="/CountryItem"
            >
              See Details
            </NavLink>
          </li>
        ))}
      </ul>
      <Routes>
        <Route path="/CountryItem" element={<CountryItem />} />
      </Routes>
    </>
  );
};

export default Country;
