import React from 'react';
import '../styles/Header.css';
import PropTypes from 'prop-types';

function Header({ pageTitle }) {
  return (
    <header className="main-header">
      <h1>{pageTitle}</h1>
    </header>
  );
}

export default Header;

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};
