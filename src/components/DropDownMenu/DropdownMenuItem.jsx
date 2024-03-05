// DropdownMenuItem.js
import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes
import PropTypes from 'prop-types';

function DropdownMenuItem({ leftIcon, rightIcon, goToMenu, onClick, children }) {
  return (
    <Link to="#" className="menu-item" onClick={() => onClick(goToMenu)}>
      <span className="icon-button">{leftIcon && <img src={leftIcon} alt="left icon" />}</span>
      {children}
      <span className="icon-right">{rightIcon && <img src={rightIcon} alt="right icon" />}</span>
    </Link>
  );
}
//Typechecking

DropdownMenuItem.propTypes = {
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  goToMenu: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default DropdownMenuItem;
