import React from 'react'
import './Header.scss'
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'

const Header = ({isLoggedIn, user,}) => {
  return (
   <header>
    <h1 className="header-logo">The Overlook</h1>
   </header>
  );
}



export default Header