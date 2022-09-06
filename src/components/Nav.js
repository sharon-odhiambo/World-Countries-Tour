import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Country from './Country';

const Nav = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Country />} />
    </Routes>
  </BrowserRouter>
);

export default Nav;
