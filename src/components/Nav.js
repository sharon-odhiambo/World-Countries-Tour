import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsFillMicFill, BsFillGearFill } from 'react-icons/bs';

const Nav = () => (
  <header>
    <NavLink className="navlink" to="/">All Countries</NavLink>
    <div className="icons">
      <BsFillMicFill size="20" />
      <BsFillGearFill size="20" />
    </div>
  </header>
);

export default Nav;
