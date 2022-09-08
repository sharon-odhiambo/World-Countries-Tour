import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FcRight } from 'react-icons/fc';
import { ImSearch } from 'react-icons/im';
import { fetchList } from '../../redux/lists/Lists';
import { countryDetails } from '../../redux/items/items';

const Country = () => {
  const countries = useSelector((state) => state.lists);
  const dispatch = useDispatch();

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(fetchList());
    }
  }, []);

  const [query, setQuery] = useState('');
  const onClickHandler = (e) => {
    dispatch(countryDetails(e.target.id));
  };

  const filteredCountries = countries.filter((country) => (
    country.name.toLowerCase().trim().includes(query.toLowerCase().trim())));

  return (
    <>
      {!filteredCountries.length && <p>Sorry, No countries match your search</p>}
      <form>
        <input type="text" placeholder="Search by Country Name" onChange={(e) => setQuery(e.target.value)} />
        <ImSearch />
      </form>
      <div className="countrieslist">
        {filteredCountries.map((country) => (
          <div key={country.flag} className="item">
            <div
              key={country.name}
              className="flag"
              style={{ backgroundImage: `url(${country.flag})` }}
            />
            <div key={country.population} className="details">
              <span>{country.name}</span>
              <span>
                Population :
                {' '}
                {country.population}
              </span>
              <NavLink
                key={country.links}
                className="anchor"
                to="/CountryItem"
              >
                <FcRight id={country.id} onClick={onClickHandler} />
              </NavLink>
            </div>
          </div>
        ))}
      </div>

    </>
  );
};

export default Country;
