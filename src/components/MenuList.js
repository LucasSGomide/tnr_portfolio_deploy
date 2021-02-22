import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/MenuList.css';

function MenuList({ menuName, linkPath }) {
  return (
    <Link to={ linkPath }>
      <ul className="list-menu">
        <li>{menuName}</li>
      </ul>
    </Link>
  );
}

export default MenuList;

MenuList.propTypes = {
  menuName: PropTypes.string.isRequired,
  linkPath: PropTypes.string.isRequired,
};
