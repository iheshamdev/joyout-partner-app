import React, { useState } from 'react';
import './style.scss';
import { NavLink, useHistory } from 'react-router-dom';
import * as NavIcons from './NavIcons';

const NavBar = props => {
  const history = useHistory();
  const [hideNavBar, setHideNavBar] = useState(
    history.location.pathname.includes('login')
  );

  history.listen((location, action) => {
    setHideNavBar(location.pathname.includes('login'));
  });

  if (hideNavBar) {
    return '';
  } else {
    return (
      <div className="navBar">
        <div className="mainContainer flex align-center justify-between">
          <NavLink exact to="/">
            <NavIcons.Home />
            Home
          </NavLink>
          <NavLink to="/reservations">
            <NavIcons.Reservations />
            Reservations
          </NavLink>
          <NavLink to="/offers">
            <NavIcons.Offers />
            Offers
          </NavLink>
          <NavLink to="/More">
            <NavIcons.More />
            More
          </NavLink>
        </div>
      </div>
    );
  }
};

export default NavBar;
