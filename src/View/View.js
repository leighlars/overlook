import React from 'react'
import './View.scss'
import LandingPage from '../LandingPage/LandingPage'
import Manager from '../Manager/Manager'
import Guest from "../Guest/Guest";
import PropTypes from "prop-types";



const View = ({isLoggedIn, user, users, bookings, rooms}) => {
  return (
   <main>
    {isLoggedIn === false && <LandingPage />}
    {user === 'manager' && <Manager users={users} bookings={bookings} rooms={rooms}/>}
    {/* {user.id && <Guest />} */}
   </main>
  );
}
  
 
  


export default View

View.propTypes = {
  user: PropTypes.object,
  isLoggedIn: PropTypes.bool
}