import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchList } from '../redux/lists/Lists';

const Country = () => {
  const countries = useSelector((state) => state.lists);
  const dispatch = useDispatch();

  // if (!countries.length) {
  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);
  // }

  return (
    <ul>
      {countries.map((country) => <li key={country.name}>{country.name}</li>)}
    </ul>
    // <div>Countries</div>
  );
};

export default Country;
