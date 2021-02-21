import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MenuButton({ btnName, btnPath }) {
  return (
    <Link to={ btnPath }>
      <button type="button" className="btn-menu">
        {btnName}
      </button>
    </Link>
  );
}

export default MenuButton;

MenuButton.propTypes = {
  btnName: PropTypes.string.isRequired,
  btnPath: PropTypes.string.isRequired,
};
