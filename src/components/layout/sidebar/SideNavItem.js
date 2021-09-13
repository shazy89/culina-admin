import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNavItem = ({ icon: Icon, content, to, setSelectedItem }) => {
  return (
    <li className="side-nav__item">
      <NavLink
        className={`side-nav__link`}
        activeClassName="side-nav__link--active"
        to={to}
      >
        <Icon className="side-nav__icon" />
        {content}
      </NavLink>
    </li>
  );
};

export default SideNavItem;
