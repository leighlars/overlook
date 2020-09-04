import React from 'react'
import './Header.scss'
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'

const Header = ({isLoggedIn, user}) => {
  return (
   <header>
    <h1 className="header-logo">The Overlook</h1>
    <div className='right-header'>
      {user.name && <h3 className='welcome-greeting'>Welcome, {user.name}</h3>}
      <div className="nav-btns">
      <NavLink to="/" className="nav-btn home">
        Home
      </NavLink>
      <NavLink to="/login" className={isLoggedIn ? "hidden" : "nav-btn login"}>
        Login
      </NavLink>
      <NavLink to="/" className={isLoggedIn ? "nav-btn logout" : 'hidden'}>
        Logout
      </NavLink>
      <NavLink to="/user-home" className={(isLoggedIn && user !== 'manager') ? "nav-btn user profile" : 'hidden'}>
        My Profile
      </NavLink>
      </div>
    </div>
   </header>
  );
}

export default Header

Header.propTypes = {
  isLoggedIn: PropTypes.bool
}