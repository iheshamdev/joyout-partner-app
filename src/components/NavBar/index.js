import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';
import * as NavIcons from './NavIcons';

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="mainContainer flex align-center justify-between">
        <NavLink exact to="/" activeClassName="active">
          <NavIcons.Home />
          Home
        </NavLink>
        <NavLink to="/booking" activeClassName="active">
          <NavIcons.Booking />
          Booking
        </NavLink>
        <NavLink to="/offers" activeClassName="active">
          <NavIcons.Offers />
          Offers
        </NavLink>
        <NavLink to="/More" activeClassName="active">
          <NavIcons.More />
          More
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
